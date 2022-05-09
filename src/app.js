require("dotenv").config();
const express = require("express");
const budayaRoutes = require("./routes/routes");
const app = express();
const { sequelize, connectDB } = require("./utils/database");

const port = process.env.PORT || 8000;

const routes = require("./routes/routes");

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

app.use(express.urlencoded({ extended: true }));
