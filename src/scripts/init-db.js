db.getCollection('test').insertMany([
  {
    "title": "Nouvelles technologies du web",
    "date": ISODate("2019-11-16T14:00:00.000Z"),
    "coefficient": 3,
    "shown": "true"
  },
  {
    "title": "Base de données",
    "date": ISODate("2019-11-08T14:00:00.000Z"),
    "coefficient": 2,
    "shown": "true"
  },
  {
    "title": "CPOOA",
    "date": ISODate("2019-12-18T08:00:00.000Z"),
    "coefficient": 5,
    "shown": "false"
  }
]);
