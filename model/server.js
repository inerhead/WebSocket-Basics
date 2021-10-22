const express = require('express');
const cors = require('cors');
const { socketController } = require('../Sockets/controller');
// const { dbConnection } = require('../db/config');

class Server {

    constructor() {
        this.port = process.env.PORT;
        this.app = express();
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        // Connect to the BD
        // this.connectDB();
        // Midlewares
        this.middleware();

        // Routes
        this.routes();

        // Sockets
        this.socket();

    }

    async connectDB() {

        await dbConnection();
    }

    middleware() {
        this.app.use(express.json());
        this.app.use(cors());

        this.app.use(express.static('./public'));
    }

    routes() {

       // this.app.use('/api/users', require('../routes/user'));
       //  this.app.use('/api/auth', require('../routes/auth'));

    }

    socket() {
        this.io.on("connection", socketController);
    }

    listen() {

        this.server.listen(this.port, () => console.log(`escuchando en ${this.port}`));
    }


}

module.exports = Server;