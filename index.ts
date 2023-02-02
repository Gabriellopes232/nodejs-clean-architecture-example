/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const bootstrap = require('./lib/infra/config/bootstrap');
const createServer = require('./lib/infra/webserver/server');

const start = async () => {
    try {
        await bootstrap.init();

        const server = createServer();

        await server.start();

        console.log('Server running at:', server.info.uri);
    } catch (err) {
        console.log(err);

        process.exit(1);
    }
};

start();