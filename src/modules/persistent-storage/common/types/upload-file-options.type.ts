import { ObjectCannedACL } from '@aws-sdk/client-s3';

export type TUploadFileOptions = {
    key: string;

    contentType?: string;

    contentDisposition?: string;

    acl?: ObjectCannedACL;
};
