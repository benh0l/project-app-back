var test1InsertedIds = db.getCollection('test').insertMany([
  {
    "title": "Projet Nlles technos web",
    "date": ISODate("2019-11-16T14:00:00.000Z"),
    "coefficient": 4,
    "shown": "true"
  },
  {
    "title": "Partiel Nlles technos web",
    "date": ISODate("2019-11-08T14:00:00.000Z"),
    "coefficient": 6,
    "shown": "true"
  },
]).insertedIds;
var test2InsertedIds = db.getCollection('test').insertMany([
  {
    "title": "Projet BDD",
    "date": ISODate("2019-12-18T08:00:00.000Z"),
    "coefficient": 5,
    "shown": "true"
  },
  {
    "title": "Partiel BDD",
    "date": ISODate("2019-12-18T08:00:00.000Z"),
    "coefficient": 5,
    "shown": "true"
  }
]).insertedIds;
var userInsertedIds = db.getCollection('user').insertMany([
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
  },
  {
    "firstname": "Bill",
    "lastname": "Boquet",
    "email": "bill.boquet@undefined.com",
    "login": "bilboq6",
    "role": "USER"
  },
  {
    "firstname": "Sarah",
    "lastname": "Croche",
    "email": "sarahCroche@undefined.com",
    "login": "sarapelle",
    "role": "USER"
  }
]).insertedIds;
var responsibleId = userInsertedIds.shift();
var groupInsertedIds = db.getCollection('group').insertMany([
  {
    "name": "Master 2 2019",
    "startDate": ISODate("2019-09-16T23:00:00.000Z"),
    "endDate": ISODate("2020-09-16T23:00:00.000Z"),
    "studentsId": userInsertedIds,
    "responsibleId": responsibleId
  },
  {
    "name": "Master 2 2020",
    "startDate": ISODate("2020-09-16T23:00:00.000Z"),
    "endDate": ISODate("2021-09-16T23:00:00.000Z"),
    "studentsId": userInsertedIds,
    "responsibleId": responsibleId
  }
]).insertedIds;
var lessonInsertedIds = db.getCollection('lesson').insertMany([
  {
    "name": "Nlles technos web",
    "teacherId": responsibleId,
    "groupId": groupInsertedIds[0],
    "testsId": test1InsertedIds
  },
  {
    "name": "Base de données",
    "teacherId": responsibleId,
    "groupId": groupInsertedIds[0],
    "testsId": test2InsertedIds
  }
]).insertedIds;
var gradeInsertedIds = db.getCollection('grade').insertMany([
  {
    "userId": userInsertedIds[2],
    "testId": test1InsertedIds[0],
    "value": 12
  }
]).insertedIds;
for(var i = 0; i < userInsertedIds.length; i++) {
  db.getCollection('user').update({ '_id': userInsertedIds[i] }, { $set: { 'groups': groupInsertedIds } })
}
for(var i = 0; i < groupInsertedIds.length; i++){
  db.getCollection('group').update({'_id': groupInsertedIds[i]}, { $set: {'lessonsId': lessonInsertedIds[i]}})
}

db.getCollection('test').update({'_id': test1InsertedIds[0]}, { $set: {'gradesId': gradeInsertedIds[0]}})

