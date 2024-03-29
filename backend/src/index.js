"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const { join } = require('node:path');
const http = require("http");
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
io.on('connection', (socket) => {
    console.log('a user connected');
});
app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
