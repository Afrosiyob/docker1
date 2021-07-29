module.exports = function () {
    switch ( process.env.NODE_ENV ) {
        case 'development':
            return {
                PORT: 5000,
                mongoUrl: "mongodb://localhost:27017/example3"
            };

        case 'production':
            return {};

        default:
            return {};
    }
};