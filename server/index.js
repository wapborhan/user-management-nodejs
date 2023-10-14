const express = require("express");
var cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const port = process.env.PORT || 3300;

// Midleware
app.use(cors());
app.use(express.json());

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

    const databaseUser = client.db("userDB").collection("users");

    app.get("/users", async (req, res) => {
      const user = databaseUser.find();
      const result = await user.toArray();
      res.send(result);
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await databaseUser.findOne(query);
      console.log(result);
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await databaseUser.insertOne(user);
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await databaseUser.deleteOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
