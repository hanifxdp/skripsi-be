require("dotenv").config();
const express = require("express");
const budayaRoutes = require("./routes/routes");
const app = express();
const { connectDB } = require("./utils/database");
const Sequelize = require("sequelize");

const port = process.env.PORT || 8000;

app.use(express.json());

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.use("/api/v1/budaya", budayaRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.use(express.urlencoded({ extended: true }));
