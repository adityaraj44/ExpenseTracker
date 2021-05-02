const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const transactions = require("./routes/transactions");

const app = express();

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/transactions", transactions);

// if(process.env.NODE_ENV === 'produciton') {
//     app
// }

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server started at ${process.env.NODE_ENV} mode on PORT ${PORT}`.red.bold
  )
);
