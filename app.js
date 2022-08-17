const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>Auto scalling demo app</h1> <h4>Message Success</h4> <p>Version: 1.0.0</p>"
  );
});

app.listen(port, () => {
  console.log(`Demo app is up and listening to port ${port}`);
});

var MongoClient = require('mongodb').MongoClient,fs = require('fs');
var ca = [fs.readFileSync("rds-combined-ca-bundle.pem")];
var connection_string = "mongodb://administrator:1234567La8@modjoul-rfid-cluster.cluster-cqwjen1x09yo.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false";

MongoClient.connect(
        connection_string, {
            sslValidate: true,
            sslCA: ca,
            useNewUrlParser: true
        },
        function (err,client) {
            console.log(err+" , "+ client);
        });
