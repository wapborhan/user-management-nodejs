const express = require("express");
var cors = require("cors");
const app = express();

const port = process.env.PORT || 3300;
app.use(cors());
const users = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "doe",
    email: "doe@example.com",
  },
  {
    id: 3,
    name: "comp",
    email: "comp@example.com",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/users", (req, res) => {
  console.log("posting user");
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
