import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("Server working");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});