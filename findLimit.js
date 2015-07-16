var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db) {
  if (err) {throw err}

  var minAge = process.argv[2];
  var coll = db.collection('parrots');

  coll.find({
    age: { $gt: +minAge }
  }, {
      name: 1,
      age: 1,
      _id: 0
  }).toArray(function(err, docs){
    if (err) {throw err}

    console.log(docs);
    db.close();
  });

});