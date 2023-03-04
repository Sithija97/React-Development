import mongoose from "mongoose";
const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB connected!"))
    .catch((error) => {
      console.log("DB connection error ");
      throw error;
    });
};

export { connect };
