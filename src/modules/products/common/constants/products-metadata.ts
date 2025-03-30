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
    },
} as const satisfies IApiMetadata;
