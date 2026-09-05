const { Server } = require('socket.io');

const userSocketMap = {};

const initializeSocket = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: process.env.FRONTEND_URL || 'http://localhost:5173',
            methods: ['GET', 'POST'],
            credentials: true,
        },
    });

    io.on('connection', (socket) => {
        console.log('A user connected', socket.id);
        const userId = socket.handshake.query.userId;

        if (userId) {
            userSocketMap[userId] = socket.id;
        }

        io.emit('getonlineusers', Object.keys(userSocketMap));

        socket.on('disconnect', () => {
            console.log('A user disconnected', socket.id);
            if (userId) {
                delete userSocketMap[userId];
                io.emit('getonlineusers', Object.keys(userSocketMap));   
            }
        });
    });

    return io;
};

module.exports = initializeSocket;

