const express = require("express");
const app = express();
const port = 4000 || process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

app.get("/user", (req, res) => {
  res.send("users, from express");
});

app.get("/login", (req, res) => {
  res.send("users, from express");
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
