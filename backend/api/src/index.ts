import express, { Express } from 'express';
import http from "http";
// import https from "https";

import { getAllWithPrefix } from './misc/config';

import config from "config";

// Load environment variables
require('dotenv').config()

// Create express application
let app: Express = express();

// Register global middlewares

// Register routers

let [hostname, port] = getAllWithPrefix("host", ["name", "port"]);
  
// Create HTTP server
const serverHttp = http.createServer(app);
serverHttp.listen(port, hostname, () => {
    console.log(`API running on http://${hostname}:${port}`)
});

// TODO: create HTTPS server?
// Will require pub/priv keypair
