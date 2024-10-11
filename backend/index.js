const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const sequelize = require('./config/database');
const BookingController = require('./controllers/BookingController');

const PROTO_PATH = path.join(__dirname, 'proto/BookingService.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});
const bookingProto = grpc.loadPackageDefinition(packageDefinition).booking;

const server = new grpc.Server();

server.addService(bookingProto.BookingService.service, BookingController);

sequelize.sync().then(() => {
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        console.log('Server running at http://0.0.0.0:50051');
        server.start();
    });
});
