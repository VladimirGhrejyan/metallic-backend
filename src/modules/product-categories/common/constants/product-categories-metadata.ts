import { IApiMetadata } from '~common/interfaces';

export const PRODUCT_CATEGORIES_METADATA = {
    TAGS: ['product-categories'],

    PREFIX: 'product-categories',

    ROUTES: {
        GET_ALL: {
            PATH: 'all',
            OPERATION_ID: 'getProductCategories',
        },

        CREATE_ONE: {
            PATH: '',
            OPERATION_ID: 'createProductCategory',
        },

        UPDATE_ONE: {
            PATH: ':id',
            OPERATION_ID: 'updateProductCategory',
            PARAMS: {
                ID: 'id',
            },
        },

        DELETE_ONE: {
            PATH: ':id',
            OPERATION_ID: 'deleteProductCategory',
            PARAMS: {
                ID: 'id',
            },
        },
    },
} as const satisfies IApiMetadata;
