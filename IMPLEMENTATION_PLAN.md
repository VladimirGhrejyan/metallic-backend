# Implementation Plan: Clients & Orders (Backend)

## Overview

Adding **Clients** (with phone contacts) and **Orders** (with order items) to `metallic-backend`. All new code follows the existing architecture: NestJS modules, TypeORM entities extending `BaseEntity`, Zod DTOs via `nestjs-zod`, route metadata constants.

**Key decisions:**

- All new entities extend `BaseEntity` (includes `deletedAt` column for future use), but **deletes are hard deletes** for now.
- No TRN (taxpayer registration number) uniqueness check.
- `order_item` stores a **price snapshot** (unit price at order creation time).
- Client price adjustment — a single `float` field that can be positive (surcharge %) or negative (discount %). Not used in calculations now, stored for future use.

---

## 1. Database Schema

### 1.1 `client`

| Column                         | Type           | Constraints           |
| ------------------------------ | -------------- | --------------------- |
| `id`                           | `int` PK       | auto-generated        |
| `name`                         | `varchar(250)` | nullable              |
| `address`                      | `varchar(500)` | nullable              |
| `price_adjustment`             | `float`        | not null, default `0` |
| `taxpayer_registration_number` | `varchar(20)`  | not null              |
| `created_at`                   | `timestamptz`  | auto                  |
| `updated_at`                   | `timestamptz`  | auto                  |
| `deleted_at`                   | `timestamptz`  | nullable              |

> **On `priceAdjustment`:** A single percentage field. Positive value = surcharge (e.g. `+5` means add 5% to total), negative = discount (e.g. `-10` means subtract 10%). Default `0` means no adjustment. This keeps it simple — one field covers both markup and discount scenarios. Not used in order calculations now, designed for future integration.

### 1.2 `client_phone`

| Column       | Type           | Constraints                            |
| ------------ | -------------- | -------------------------------------- |
| `id`         | `int` PK       | auto-generated                         |
| `client_id`  | `int` FK       | not null, references `client`, CASCADE |
| `phone`      | `varchar(20)`  | not null                               |
| `name`       | `varchar(250)` | nullable                               |
| `created_at` | `timestamptz`  | auto                                   |
| `updated_at` | `timestamptz`  | auto                                   |
| `deleted_at` | `timestamptz`  | nullable                               |

### 1.3 `order`

| Column       | Type          | Constraints                            |
| ------------ | ------------- | -------------------------------------- |
| `id`         | `int` PK      | auto-generated                         |
| `client_id`  | `int` FK      | not null, references `client`, CASCADE |
| `created_at` | `timestamptz` | auto                                   |
| `updated_at` | `timestamptz` | auto                                   |
| `deleted_at` | `timestamptz` | nullable                               |

### 1.4 `order_item`

| Column       | Type          | Constraints                             |
| ------------ | ------------- | --------------------------------------- |
| `id`         | `int` PK      | auto-generated                          |
| `order_id`   | `int` FK      | not null, references `order`, CASCADE   |
| `product_id` | `int` FK      | not null, references `product`, CASCADE |
| `count`      | `int`         | not null, > 0                           |
| `price`      | `float`       | not null                                |
| `created_at` | `timestamptz` | auto                                    |
| `updated_at` | `timestamptz` | auto                                    |
| `deleted_at` | `timestamptz` | nullable                                |

> **On `price`:** Stores the **per-unit selling price** at the time the order was created: `costPrice * (1 + markup / 100)`. The line total is `price * count`. This protects order history from future product price changes.

---

## 2. Entities

All in `src/orm/entities/`.

### 2.1 `client.entity.ts`

```typescript
@Entity()
export class Client extends BaseEntity implements IClient {
    static readonly NAME_LENGTH = 250;
    static readonly ADDRESS_LENGTH = 500;
    static readonly TRN_LENGTH = 20;

    @Column({ type: 'varchar', length: Client.NAME_LENGTH, nullable: true })
    name: string | null;

    @Column({ type: 'varchar', length: Client.ADDRESS_LENGTH, nullable: true })
    address: string | null;

    @Column({ type: 'float', nullable: false, default: 0 })
    priceAdjustment: number;

    @Column({ type: 'varchar', length: Client.TRN_LENGTH, nullable: false })
    taxpayerRegistrationNumber: string;

    @OneToMany(() => ClientPhone, (phone) => phone.client)
    phones: ClientPhone[];
}
```

### 2.2 `client-phone.entity.ts`

```typescript
@Entity()
export class ClientPhone extends BaseEntity implements IClientPhone {
    static readonly PHONE_LENGTH = 20;
    static readonly NAME_LENGTH = 250;

    @Column({ type: 'int', nullable: false })
    clientId: number;

    @ManyToOne(() => Client, (client) => client.phones, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'client_id' })
    client: Client;

    @Column({ type: 'varchar', length: ClientPhone.PHONE_LENGTH, nullable: false })
    phone: string;

    @Column({ type: 'varchar', length: ClientPhone.NAME_LENGTH, nullable: true })
    name: string | null;
}
```

### 2.3 `order.entity.ts`

```typescript
@Entity()
export class Order extends BaseEntity implements IOrder {
    @Column({ type: 'int', nullable: false })
    clientId: number;

    @ManyToOne(() => Client, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'client_id' })
    client: Client;

    @OneToMany(() => OrderItem, (item) => item.order)
    items: OrderItem[];
}
```

### 2.4 `order-item.entity.ts`

```typescript
@Entity()
export class OrderItem extends BaseEntity implements IOrderItem {
    @Column({ type: 'int', nullable: false })
    orderId: number;

    @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @Column({ type: 'int', nullable: false })
    productId: number;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @Column({ type: 'int', nullable: false })
    count: number;

    @Column({ type: 'float', nullable: false })
    price: number;
}
```

### 2.5 Update `src/orm/entities/index.ts`

Add exports for `Client`, `ClientPhone`, `Order`, `OrderItem`.

---

## 3. Interfaces

All in `src/common/interfaces/`.

### New files:

**`client.interface.ts`**

```typescript
export interface IClient {
    name: string | null;
    address: string | null;
    priceAdjustment: number;
    taxpayerRegistrationNumber: string;
}
```

**`client-phone.interface.ts`**

```typescript
export interface IClientPhone {
    clientId: number;
    phone: string;
    name: string | null;
}
```

**`order.interface.ts`**

```typescript
export interface IOrder {
    clientId: number;
}
```

**`order-item.interface.ts`**

```typescript
export interface IOrderItem {
    orderId: number;
    productId: number;
    count: number;
    price: number;
}
```

### Update `src/common/interfaces/index.ts`

Export all new interfaces.

---

## 4. Clients Module

Location: `src/modules/api/clients/`

### 4.1 Structure

```
clients/
├── clients.module.ts
├── clients.controller.ts
├── clients.service.ts
├── clients.repository.ts
├── index.ts
└── common/
    ├── constants/
    │   ├── clients-metadata.ts
    │   └── index.ts
    ├── dto/
    │   ├── create-client.dto.ts
    │   ├── update-client.dto.ts
    │   ├── create-client-phone.dto.ts
    │   ├── update-client-phone.dto.ts
    │   ├── get-one-client-output.dto.ts
    │   ├── get-all-clients-input.dto.ts
    │   ├── get-all-clients-output.dto.ts
    │   └── index.ts
    └── schema/
        ├── client-name.schema.ts
        ├── client-address.schema.ts
        ├── client-price-adjustment.schema.ts
        ├── client-trn.schema.ts
        ├── client-phone-number.schema.ts
        ├── client-phone-name.schema.ts
        └── index.ts
```

### 4.2 Metadata (`clients-metadata.ts`)

```typescript
export const CLIENTS_METADATA = {
    TAGS: ['clients'],
    PREFIX: 'clients',
    ROUTES: {
        GET_ALL: { PATH: '', OPERATION_ID: 'getClients' },
        GET_ONE: { PATH: ':id', OPERATION_ID: 'getClientById', PARAMS: { ID: 'id' } },
        CREATE_ONE: { PATH: '', OPERATION_ID: 'createClient' },
        UPDATE_ONE: { PATH: ':id', OPERATION_ID: 'updateClient', PARAMS: { ID: 'id' } },
        DELETE_ONE: { PATH: ':id', OPERATION_ID: 'deleteClient', PARAMS: { ID: 'id' } },
        CREATE_PHONE: {
            PATH: ':id/phones',
            OPERATION_ID: 'createClientPhone',
            PARAMS: { ID: 'id' },
        },
        UPDATE_PHONE: {
            PATH: ':id/phones/:phoneId',
            OPERATION_ID: 'updateClientPhone',
            PARAMS: { ID: 'id', PHONE_ID: 'phoneId' },
        },
        DELETE_PHONE: {
            PATH: ':id/phones/:phoneId',
            OPERATION_ID: 'deleteClientPhone',
            PARAMS: { ID: 'id', PHONE_ID: 'phoneId' },
        },
    },
} as const satisfies IApiMetadata;
```

### 4.3 Zod Schemas

| Schema                        | Definition                     |
| ----------------------------- | ------------------------------ |
| `clientNameSchema`            | `z.string().max(250)`          |
| `clientAddressSchema`         | `z.string().max(500)`          |
| `clientPriceAdjustmentSchema` | `z.number()` (allows negative) |
| `clientTrnSchema`             | `z.string().min(1).max(20)`    |
| `clientPhoneNumberSchema`     | `z.string().min(1).max(20)`    |
| `clientPhoneNameSchema`       | `z.string().max(250)`          |

### 4.4 DTOs

**`CreateClientDto`**

```
{
    name?: string | null,
    address?: string | null,
    priceAdjustment?: number,       // optional, defaults to 0 at entity level
    taxpayerRegistrationNumber: string,
    phones?: CreateClientPhoneDto[]  // optional initial phones
}
```

**`UpdateClientDto`**

```
{
    name?: string | null,
    address?: string | null,
    priceAdjustment?: number,
    taxpayerRegistrationNumber?: string
}
```

**`CreateClientPhoneDto`**

```
{ phone: string, name?: string | null }
```

**`UpdateClientPhoneDto`**

```
{ phone?: string, name?: string | null }
```

**`GetOneClientOutputDto`** — BaseEntity fields + client fields + `phones: ClientPhoneOutputDto[]`

**`GetAllClientsInputDto`** — `PaginationInputSchema` + `search?`, `sortBy`, `order`

**`GetAllClientsOutputDto`** — `{ items: GetOneClientOutputDto[], meta: PaginationMeta }`

### 4.5 API Endpoints

| Method | Path                           | Auth | Operation ID        |
| ------ | ------------------------------ | ---- | ------------------- |
| GET    | `/clients`                     | JWT  | `getClients`        |
| GET    | `/clients/:id`                 | JWT  | `getClientById`     |
| POST   | `/clients`                     | JWT  | `createClient`      |
| PATCH  | `/clients/:id`                 | JWT  | `updateClient`      |
| DELETE | `/clients/:id`                 | JWT  | `deleteClient`      |
| POST   | `/clients/:id/phones`          | JWT  | `createClientPhone` |
| PATCH  | `/clients/:id/phones/:phoneId` | JWT  | `updateClientPhone` |
| DELETE | `/clients/:id/phones/:phoneId` | JWT  | `deleteClientPhone` |

### 4.6 Repository

- `getAll(criteria)` — paginated, search by `name` and `taxpayerRegistrationNumber`
- `getClientOrThrowException(id)` — with `phones` relation, throws `NotFoundException`
- `createOne(dto)` — saves client, optionally creates phones
- `updateOne(id, dto)` — updates client fields
- `deleteOne(id)` — **hard delete** (`repository.delete(id)`)
- `createPhone(clientId, dto)` — validates client exists, saves phone
- `updatePhone(clientId, phoneId, dto)` — validates both exist, updates
- `deletePhone(clientId, phoneId)` — validates both exist, **hard delete**

### 4.7 Service

Thin layer delegating to repository (same pattern as `ProductsService`). For `createOne`, returns the created client with phones via `getClientOrThrowException`.

---

## 5. Orders Module

Location: `src/modules/api/orders/`

### 5.1 Structure

```
orders/
├── orders.module.ts
├── orders.controller.ts
├── orders.service.ts
├── orders.repository.ts
├── index.ts
└── common/
    ├── constants/
    │   ├── orders-metadata.ts
    │   └── index.ts
    ├── dto/
    │   ├── create-order.dto.ts
    │   ├── update-order.dto.ts
    │   ├── get-one-order-output.dto.ts
    │   ├── get-all-orders-input.dto.ts
    │   ├── get-all-orders-output.dto.ts
    │   └── index.ts
    └── schema/
        ├── order-item-count.schema.ts
        └── index.ts
```

### 5.2 Metadata (`orders-metadata.ts`)

```typescript
export const ORDERS_METADATA = {
    TAGS: ['orders'],
    PREFIX: 'orders',
    ROUTES: {
        GET_ALL: { PATH: '', OPERATION_ID: 'getOrders' },
        GET_ONE: { PATH: ':id', OPERATION_ID: 'getOrderById', PARAMS: { ID: 'id' } },
        CREATE_ONE: { PATH: '', OPERATION_ID: 'createOrder' },
        UPDATE_ONE: { PATH: ':id', OPERATION_ID: 'updateOrder', PARAMS: { ID: 'id' } },
        DELETE_ONE: { PATH: ':id', OPERATION_ID: 'deleteOrder', PARAMS: { ID: 'id' } },
    },
} as const satisfies IApiMetadata;
```

### 5.3 DTOs

**`CreateOrderDto`**

```
{
    clientId: number,
    items: { productId: number, count: number }[]   // at least 1 item
}
```

> Note: `price` is NOT in the input DTO — it's calculated server-side from the product's `costPrice` and `markup` at the moment of creation.

**`UpdateOrderDto`**

```
{
    clientId?: number,
    items?: { productId: number, count: number }[]
}
```

> When `items` is provided, existing items are **replaced** entirely (delete all old items, insert new ones).

**`GetOneOrderOutputDto`**

```
BaseEntity + {
    clientId: number,
    client: { id, name, taxpayerRegistrationNumber },
    items: [{
        id, orderId, productId, count, price,
        product: { id, title, code }
    }]
}
```

**`GetAllOrdersInputDto`** — `PaginationInputSchema` + `search?`, `sortBy`, `order`, `clientId?`

**`GetAllOrdersOutputDto`** — `{ items: GetOneOrderOutputDto[], meta: PaginationMeta }`

### 5.4 API Endpoints

| Method | Path          | Auth | Operation ID   |
| ------ | ------------- | ---- | -------------- |
| GET    | `/orders`     | JWT  | `getOrders`    |
| GET    | `/orders/:id` | JWT  | `getOrderById` |
| POST   | `/orders`     | JWT  | `createOrder`  |
| PATCH  | `/orders/:id` | JWT  | `updateOrder`  |
| DELETE | `/orders/:id` | JWT  | `deleteOrder`  |

### 5.5 Repository

- `getAll(criteria)` — paginated, join `client`, optional `clientId` filter, search by client `name`
- `getOrderOrThrowException(id)` — with `client`, `items`, `items.product` relations
- `createOne(dto)` — **in a transaction**:
    1. Validate client exists (via `ClientsRepository`)
    2. Fetch all referenced products, validate they exist
    3. Calculate `price` per item: `product.costPrice * (1 + product.markup / 100)`
    4. Save order
    5. Save order items with calculated prices
    6. Return full order via `getOrderOrThrowException`
- `updateOne(id, dto)` — **in a transaction**:
    1. Validate order exists
    2. If `clientId` changed — validate new client exists
    3. If `items` provided — delete existing items, insert new ones (same price calc logic)
    4. Update order
- `deleteOne(id)` — **hard delete** (items cascade via FK)

### 5.6 Service

Delegates to repository. `createOne` returns the full order with relations. Same thin-service pattern as products.

### 5.7 Module

```typescript
@Module({
    imports: [TypeOrmModule.forFeature([Order, OrderItem, Product, Client]), ClientsModule],
    controllers: [OrdersController],
    providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
```

---

## 6. Module Registration

Update `src/modules/api/api.module.ts`:

```typescript
imports: [AuthModule, UsersModule, ProductCategoriesModule, ProductsModule, ClientsModule, OrdersModule],
```

---

## 7. Migration

After all entities are created:

```bash
npm run migration:generate -- AddClientsAndOrders
npm run migration:run
```

---

## 8. Implementation Order

### Step 1: Interfaces

1. Create `client.interface.ts`, `client-phone.interface.ts`, `order.interface.ts`, `order-item.interface.ts`
2. Update `src/common/interfaces/index.ts`

### Step 2: Entities

1. Create `client.entity.ts`, `client-phone.entity.ts`, `order.entity.ts`, `order-item.entity.ts`
2. Update `src/orm/entities/index.ts`

### Step 3: Clients Module

1. Schemas (6 files)
2. DTOs (7 files + index)
3. Metadata constants
4. Repository
5. Service
6. Controller
7. Module + index

### Step 4: Orders Module

1. Schemas (1 file + index)
2. DTOs (5 files + index)
3. Metadata constants
4. Repository
5. Service
6. Controller
7. Module + index

### Step 5: Wire Up

1. Update `api.module.ts` — import both new modules
2. Generate migration
3. Run migration & test

---

## 9. Notes

- **Hard delete:** `repository.delete(id)` instead of `repository.softDelete(id)`. The `deletedAt` column stays in the schema for future soft-delete migration.
- **Price snapshot:** Calculated once at order creation from `product.costPrice * (1 + product.markup / 100)`. Future product price changes don't affect existing orders.
- **Client `priceAdjustment`:** Stored but not applied to any calculations yet. When activated in the future, the formula would be something like: `finalPrice = unitPrice * (1 + client.priceAdjustment / 100)`.
- **Order items replacement:** On update, if `items` array is provided, all existing items are removed and replaced. Simple and predictable.
- **Transactions:** Order creation/update uses `EntityManager` transactions (existing `getRepository(manager)` pattern).
