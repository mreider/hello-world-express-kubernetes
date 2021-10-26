const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.send({
    message: "Hello world",
  });
});

app.listen(9998, () => {
  console.log("Running on port 9998...");
});
