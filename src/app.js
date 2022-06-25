require("dotenv").config();
const express = require("express");
const budayaRoutes = require("./routes/routes");
const session = require("express-session");
const cors = require("cors");
const fs = require("fs");
const routes = require("./routes/routes");
const app = express();
const passport = require("./utils/passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sessionConfig = require("./config/sessionConfig");
const { sequelize, connectDB } = require("./utils/database");

const port = process.env.PORT || 8000;
const sessionStore = new SequelizeStore({
  db: sequelize,
});

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
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session(sessionConfig(sessionStore)));
app.use(passport.initialize());
app.use(passport.session());

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.use("/api/v1", budayaRoutes);

app.use(express.urlencoded({ extended: true }));

module.exports = app;
