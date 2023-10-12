const express = require("express");
var cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");

const port = process.env.PORT || 3300;

// Midleware
app.use(cors());
app.use(express.json());
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

const uri =
  "mongodb+srv://borhanuddin979:xP0r0eaziy0IYfEI@cluster0.7dbji.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
