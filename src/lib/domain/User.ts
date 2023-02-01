'use strict';

module.exports = class {
    id: number | null;
    firstName: string;
    lastName: string;
    email: string;
    password: number;

    constructor(id = null, firstName: string, lastName: string, email: string, password: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

};