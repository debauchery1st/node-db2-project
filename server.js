const express = require("express");
const helmet = require("helmet");
const carsRouter = require("./cars/router");
const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).send("welcome");
});
server.use("/api/cars", carsRouter);

module.exports = server;
