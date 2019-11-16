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
var result = db.getCollection('user').insertMany([
  {
    "firstname": "Admin",
    "lastname": "Admin",
    "email": "admin@undefined.com",
    "login": "admin",
    "role": "ADMIN"
  },
  {
    "firstname": "User1",
    "lastname": "Name1",
    "email": "user1.name1@undefined.com",
    "login": "user1",
    "role": "USER"
  }
]);
var responsibleId = result.insertedIds.shift();
  db.getCollection('group').insertMany([
  {
    "name": "Master 2 2019",
    "startDate": ISODate("2019-09-16T23:00:00.000Z"),
    "endDate": ISODate("2020-09-16T23:00:00.000Z"),
    "studentsId": result.insertedIds,
    "responsibleId": responsibleId
  },
  {
    "name": "Master 2 2020",
    "startDate": ISODate("2020-09-16T23:00:00.000Z"),
    "endDate": ISODate("2021-09-16T23:00:00.000Z"),
    "studentsId": result.insertedIds,
    "responsibleId": responsibleId
  }
]);

