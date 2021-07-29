const express = require( "express" )
const config = require( "config" )
const { connectMongoDB } = require( "../connection/connection" )
const app = express()

connectMongoDB()

const PORT = config.get( "PORT" ) || 5000

app.listen( PORT, () => console.log( `Server is runnig on ${ PORT }` ) )