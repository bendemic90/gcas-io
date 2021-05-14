let mongoose = require("mongoose");
let db = require("../models/Client");

mongoose.connect("mongodb://localhost/gcas-clients", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let clientSeed = [
  {
    added: new Date(),
    firstName: "beatrice",
    lastName: "something",
    emergencyContact: [
      {
        name: "bobby",
        number: 123456,
        relation: "brother"
      }
    ]
  },
  {
    added: new Date(),
    emergencyContact: [
        {
          name: "billy",
          number: 123456789,
          relation: "brother"
        }
      ],
    firstName: "testuser2",
    lastName: "testies"
  },
  {
    added: new Date(),
    emergencyContact: [
        {
          name: "somethingelse",
          number: 83745786,
          relation: "sister"
        }
      ],
    firstName: "testuser3",
    lastName: "testies3"
  },
];

db.Client.deleteMany({})
  .then(() => db.Client.collection.insertMany(clientSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });