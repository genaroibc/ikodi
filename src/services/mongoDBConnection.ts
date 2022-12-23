import mongoose from "mongoose";

let isConnected = false;

export function mongoDBConnection(uri = "") {
  if (!isConnected && uri) {
    mongoose.set("strictQuery", false);

    mongoose
      .connect(uri)
      .then(() => console.log(`MongoDB connected in ${uri}!!`))
      .catch(console.error);

    isConnected = true;
  }
}
