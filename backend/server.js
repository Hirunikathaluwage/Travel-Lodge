import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const db = process.env.MongoURI;

mongoose
  .connect(db)
  .then(() => console.log(" Mondodb Connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("Server working ");
});


const port = process.env.PORT || 5000;

app.listen(port, () => {(`Server running on port port ${port} `);

});
