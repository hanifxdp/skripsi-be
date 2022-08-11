require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const apiRouter = require("./routes/routes");
const { connectDB } = require("./utils/database");

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Set-Cookie",
    "Special-Request-Header",
  ],
  preflightContinue: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "3mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ limit: "3mb", extended: false }));

app.get("/", (req, res) => res.send("Node.js, Express, and Postgres API"));
app.use("/api/v1", apiRouter);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

module.exports = app;
