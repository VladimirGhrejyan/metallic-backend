import { IApiMetadata } from '~common/interfaces';

export const PRODUCTS_METADATA = {
    TAGS: ['products'],

    PREFIX: 'products',

    ROUTES: {
        GET_ALL: {
            PATH: '',
            OPERATION_ID: 'getProducts',
        },

        GET_ONE: {
            PATH: ':id',
            OPERATION_ID: 'getProductById',
            PARAMS: {
                ID: 'id',
            },
        },

        CREATE_ONE: {
            PATH: '',
            OPERATION_ID: 'createProduct',
        },

        UPDATE_ONE: {
            PATH: ':id',
            OPERATION_ID: 'updateProduct',
            PARAMS: {
                ID: 'id',
            },
        },

        DELETE_ONE: {
            PATH: ':id',
            OPERATION_ID: 'deleteProduct',
            PARAMS: {
                ID: 'id',
            },
        },

        UPDATE_ONE_IMAGE: {
            PATH: ':id/image',
            OPERATION_ID: 'updateProductImage',
            PARAMS: {
                ID: 'id',
            },
        },

        UPDATE_MANY: {
            PATH: 'bulk',
            OPERATION_ID: 'bulkUpdateProducts',
        },
    },
} as const satisfies IApiMetadata;
