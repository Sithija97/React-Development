import express from "express";
import { connect } from "./db/db.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use("/api/users", userRoutes);

const server = () => {
  connect();
  app.listen(8000, () => {
    console.log("Listening to port:", 8000);
  });
};

server();
