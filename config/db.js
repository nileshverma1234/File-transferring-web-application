const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = async() =>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_CONNECTION_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });


        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports= connectDB;