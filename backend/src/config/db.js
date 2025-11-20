// const { MongoClient, ServerApiVersion } = require("mongodb");
// const mongoose = require("mongoose")

// const uri = "mongodb+srv://ashokzarmariya90:V6iwPHCeWMMGvKaW@cluster0.hgjvduv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });

// async function connectToDB() {
//   // try {
//   //   await client.connect();
//   //   console.log("Connected to MongoDB");
//   // } catch (err) {
//   //   console.error("Failed to connect to MongoDB", err);
//   // }
//   return mongoose.connect(uri)
// }

// module.exports = connectToDB;


require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;