const mongoose = require( 'mongoose' );
const config = require( 'config' );

const connectMongoDB = async () => {
    await mongoose.connect( config.get( 'mongoUrl' ), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    } )
        .then( () => console.log( 'MongoDB connected' ) )
        .catch( ( err ) => {
            console.log( err );
            process.exit( 1 )
        } )
}

module.exports = {
    connectMongoDB
}