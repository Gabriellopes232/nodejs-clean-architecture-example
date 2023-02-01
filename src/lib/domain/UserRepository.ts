/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

module.exports = class {

    persist(domainUser: any) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    merge(domainUser: any) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    remove(userId: number) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    get(userId: number) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    getByEmail(email: string) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    find() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

};
