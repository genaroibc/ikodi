import mongoose from "mongoose";

let isConnected = false;

export function mongoDBConnection(uri = "") {
  if (!uri)
    throw new Error(
      "'uri' parameter is required. Please specify a valid mongoDB uri"
    );

  if (!isConnected && uri) {
    mongoose.set("strictQuery", false);

    mongoose
      .connect(uri)
      .then(() => console.log(`MongoDB connected in ${uri}!!`))
      .catch(console.error);

    isConnected = true;
  }
}
