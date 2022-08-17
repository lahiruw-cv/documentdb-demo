const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://administrator:1234567La8@modjoul-rfid-cluster.cluster-cqwjen1x09yo.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false"
);
