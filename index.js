const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aogl6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("groxiWarehouse").collection("product");
  // perform actions on the collection object
  console.log('Mongo is connected');
  client.close();
});


app.get('/', (req, res) =>{
    res.send('running warehouse server');
});

app.listen(port, () =>{
    console.log('Listening to port', port);
})