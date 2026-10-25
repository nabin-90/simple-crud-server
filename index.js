import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const client = new MongoClient(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rcrbmxp.mongodb.net/`,
);

app.get("/", (req, res) => {
  res.send("Simple CRUD Server is running");
});

app.listen(port, () => {
  console.log(`Simple CRUD Server is running on port: ${port}`);
});
