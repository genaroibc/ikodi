import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
let isConnected = false;

export function mongoDBConnection() {
  if (!MONGODB_URI)
    throw new Error("env variable 'MONGODB_URI' is not declared");

  if (!isConnected) {
    mongoose.set("strictQuery", false);

    mongoose
      .connect(MONGODB_URI)
      .then(() => console.log(`-- MongoDB connected in "${MONGODB_URI}" --`))
      .catch(console.error);

    isConnected = true;
  }
}
