const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const pinRoutes = require("./routes/pinRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then((conn) => {
    console.log(`MongoDB: ${conn.connections[0].host}`.cyan.underline);
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use("/api/pins", pinRoutes);
app.use("/api/users", userRoutes);

app.listen(4000, () => {
  console.log("Server running on port 4000".yellow.bold);
});
