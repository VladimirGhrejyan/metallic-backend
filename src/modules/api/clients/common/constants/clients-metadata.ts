import { IApiMetadata } from '~common/interfaces';

export const CLIENTS_METADATA = {
    TAGS: ['clients'],

    PREFIX: 'clients',

    ROUTES: {
        GET_ALL: {
            PATH: '',
            OPERATION_ID: 'getClients',
        },

        GET_ONE: {
            PATH: ':id',
            OPERATION_ID: 'getClientById',
            PARAMS: {
                ID: 'id',
            },
        },

        CREATE_ONE: {
            PATH: '',
            OPERATION_ID: 'createClient',
        },

        UPDATE_ONE: {
            PATH: ':id',
            OPERATION_ID: 'updateClient',
            PARAMS: {
                ID: 'id',
            },
        },

        DELETE_ONE: {
            PATH: ':id',
            OPERATION_ID: 'deleteClient',
            PARAMS: {
                ID: 'id',
            },
        },

        CREATE_PHONE: {
            PATH: ':id/phones',
            OPERATION_ID: 'createClientPhone',
            PARAMS: {
                ID: 'id',
            },
        },

        UPDATE_PHONE: {
            PATH: ':id/phones/:phoneId',
            OPERATION_ID: 'updateClientPhone',
            PARAMS: {
                ID: 'id',
                PHONE_ID: 'phoneId',
            },
        },

        DELETE_PHONE: {
            PATH: ':id/phones/:phoneId',
            OPERATION_ID: 'deleteClientPhone',
            PARAMS: {
                ID: 'id',
                PHONE_ID: 'phoneId',
            },
        },
    },
} as const satisfies IApiMetadata;
