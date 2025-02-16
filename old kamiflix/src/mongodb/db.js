import { MongoClient } from "mongodb"
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI ?? "";
const options = { appName: "KamiFlix"}

let client
let clientPromise

if (!uri) {
  console.log("Please add your MongoDB URI to .env")
}

try {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise && uri) {
      client = new MongoClient(uri, options)
      global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }
} catch (err) {
  console.log(err)
}

export const connectMongo = async () => {
  if (!uri) return;
  try {
    mongoose.connect(uri);
  } catch (err) {
    console.log(err)
  }
}

export default clientPromise