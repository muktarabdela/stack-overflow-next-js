import mongoose from "mongoose";
let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_LINK) {
    return console.log("MISSING MONGODB LINK");
  }
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_LINK, {
      dbName: "devflow",
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};
