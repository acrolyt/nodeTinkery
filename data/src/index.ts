import { createServer } from 'http';

import * as Hapi from 'hapi';
import chalk from 'chalk'
import * as denodeify from 'denodeify';

import { NODE_ENV } from './modules/env';
import { log } from './modules/logger';

log.info(chalk.gray(`Running in ${chalk.cyan(NODE_ENV)} mode…`));

const serverPort = 7777;
const serverInterface = '0.0.0.0';

const server=Hapi.server({
    host: serverInterface,
    port: serverPort
});

server.route({
    method:'GET',
    path:'/',
    handler:function(request,h) {
        return 'It works';
    }
});

log.info('Staring Server on: ' + serverInterface + ':' + serverPort);

async function start() {

    try {
        await server.start();
    }
    catch (err) {
        log.error(err);
        process.exit(1);
    }

    log.silly('Server running at:', server.info.uri);
};

start();