import mongoose from 'mongoose';
import 'dotenv/config'

const {
    MONGO_SERVER,
    MONGO_PORT,
    MONGO_DB,
    MONGO_USER,
    MONGO_PASSWORD
  } = process.env;

const connectMongo = async () => mongoose.connect('mongodb://localhost:27017/test');

//console.log('direccion es',`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_SERVER}:${MONGO_PORT}/${MONGO_DB}`)
//const connectMongo = async () => mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_SERVER}:${MONGO_PORT}/${MONGO_DB}`);

export default connectMongo;