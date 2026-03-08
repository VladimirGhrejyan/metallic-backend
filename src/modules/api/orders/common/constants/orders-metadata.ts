import { IApiMetadata } from '~common/interfaces';

export const ORDERS_METADATA = {
    TAGS: ['orders'],

    PREFIX: 'orders',

    ROUTES: {
        GET_ALL: {
            PATH: '',
            OPERATION_ID: 'getOrders',
        },

        GET_ONE: {
            PATH: ':id',
            OPERATION_ID: 'getOrderById',
            PARAMS: {
                ID: 'id',
            },
        },

        CREATE_ONE: {
            PATH: '',
            OPERATION_ID: 'createOrder',
        },

        UPDATE_ONE: {
            PATH: ':id',
            OPERATION_ID: 'updateOrder',
            PARAMS: {
                ID: 'id',
            },
        },

        DELETE_ONE: {
            PATH: ':id',
            OPERATION_ID: 'deleteOrder',
            PARAMS: {
                ID: 'id',
            },
        },
    },
} as const satisfies IApiMetadata;
