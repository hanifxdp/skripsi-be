require("dotenv").config();
const express = require("express");
const budayaRoutes = require("./routes/routes");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const cors = require("cors");
const fs = require("fs");
const http = require("http");
const enforce = require("express-sslify");

const routes = require("./routes/routes");

const passport = require("./utils/passport");
const sessionConfig = require("./config/sessionConfig");
const { sequelize, connectDB } = require("./utils/database");

const app = express();
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
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session(sessionConfig(sessionStore)));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});
app.use("/api/v1", budayaRoutes);
app.use(express.urlencoded({ extended: true }));

const httpServer = http.createServer(app);

connectDB().then(async () => {
  await httpServer.listen(port);
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
