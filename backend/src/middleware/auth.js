const jwt = require('jsonwebtoken');

function authenticate(call, callback, next) {
    const token = call.metadata.get('authorization')[0];
    if (!token) {
        return callback({ code: grpc.status.UNAUTHENTICATED, message: "No token provided" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return callback({ code: grpc.status.UNAUTHENTICATED, message: "Invalid token" });
        }
        call.userId = decoded.id;
        next();
    });
}

module.exports = authenticate;
