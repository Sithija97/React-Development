import mongoose from "mongoose";
const MONGO_URL = "mongodb://127.0.0.1:27017/twitter-app";
const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB connected!"))
    .catch((error) => {
      console.log("DB connection error ");
      throw error;
    });
};

export { connect };
