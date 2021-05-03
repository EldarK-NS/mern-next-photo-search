const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connectURI = process.env.MONGO_DB_URI || 'mongodb+srv://Eldar:qwerty123@cluster0.65nns.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.set("useCreateIndex", true)

const connect = async () => {
  try{
    await mongoose.connect(connectURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("connected to database")
  }catch(e){
    console.log(`an error occured ${e.message}`)
  }
}

module.exports = connect;