import express from "express";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use("/", Route);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 8000;

const URL = process.env.MONGODB_URI;

Connection(URL);

DefaultData();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
