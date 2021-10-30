const express = require("express");
const app = express();

// Config
const { port } = require("./Config/server.config");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port || 5000, () => {
  console.log("Start server at port ", port);
});
