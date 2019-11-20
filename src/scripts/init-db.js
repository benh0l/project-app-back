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
  {
    "title": "Controle Surprise",
    "date": ISODate("2019-11-08T14:00:00.000Z"),
    "coefficient": 1,
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
var test3InsertedIds = db.getCollection('test').insertMany([
  {
    "title": "Minéralogie partiel",
    "date": ISODate("2019-12-18T08:00:00.000Z"),
    "coefficient": 5,
    "shown": "true"
  },
  {
    "title": "Bio. Animale partiel",
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
  },
  {
    "firstname": "Max",
    "lastname": "Himome",
    "email": "max.himome@mail.com",
    "login": "maximum",
    "role": "USER"
  },
  {
    "firstname": "Alexander",
    "lastname": "Nübel",
    "email": "ANubel@kfc.com",
    "login": "BestGK54",
    "role": "USER"
  },
  {
    "firstname": "Dominique",
    "lastname": "InFact",
    "email": "Infact@infact.com",
    "login": "inFactTheFact",
    "role": "USER"
  },
  {
    "firstname": "Rick",
    "lastname": "Astley",
    "email": "NeverGonna@GiveYou.up",
    "login": "NeverGonnaLetYouDown",
    "role": "USER"
  }
]).insertedIds;
var responsibleId = userInsertedIds.shift();
var responsibleId2 = userInsertedIds.shift();
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
  },
  {
    "name": "Licence Biologie",
    "startDate": ISODate("2019-09-16T23:00:00.000Z"),
    "endDate": ISODate("2020-09-16T23:00:00.000Z"),
    "studentsId": userInsertedIds,
    "responsibleId": responsibleId2
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
  },
  {
    "name": "Biologie",
    "teacherId": responsibleId2,
    "groupId": groupInsertedIds[2],
    "testsId": test3InsertedIds
  },
  {
    "name": "CPOA",
    "teacherId": responsibleId,
    "groupId": groupInsertedIds[0],
    "testsId": []
  }
]).insertedIds;
var gradeInsertedIds = db.getCollection('grade').insertMany([
  {
    "userId": userInsertedIds[2],
    "testId": test1InsertedIds[0],
    "value": 12
  },
  {
    "userId": userInsertedIds[4],
    "testId": test1InsertedIds[0],
    "value": 18
  },
  {
    "userId": userInsertedIds[1],
    "testId": test1InsertedIds[0],
    "value": 13
  },
  {
    "userId": userInsertedIds[1],
    "testId": test1InsertedIds[1],
    "value": 16
  },
  {
    "userId": userInsertedIds[5],
    "testId": test1InsertedIds[1],
    "value": 6
  },
  {
    "userId": userInsertedIds[0],
    "testId": test1InsertedIds[1],
    "value": 8
  },
  {
    "userId": userInsertedIds[3],
    "testId": test2InsertedIds[0],
    "value": 12
  },
  {
    "userId": userInsertedIds[6],
    "testId": test2InsertedIds[0],
    "value": 3
  },
  {
    "userId": userInsertedIds[6],
    "testId": test2InsertedIds[0],
    "value": 13
  },
  {
    "userId": userInsertedIds[4],
    "testId": test2InsertedIds[1],
    "value": 10
  },
  {
    "userId": userInsertedIds[1],
    "testId": test2InsertedIds[1],
    "value": 2
  },
  {
    "userId": userInsertedIds[0],
    "testId": test2InsertedIds[1],
    "value": 19
  },
  {
    "userId": userInsertedIds[3],
    "testId": test3InsertedIds[0],
    "value": 10
  },
  {
    "userId": userInsertedIds[4],
    "testId": test3InsertedIds[0],
    "value": 16
  },
  {
    "userId": userInsertedIds[7],
    "testId": test3InsertedIds[0],
    "value": 1
  },
  {
    "userId": userInsertedIds[5],
    "testId": test3InsertedIds[1],
    "value": 10
  },
  {
    "userId": userInsertedIds[3],
    "testId": test3InsertedIds[1],
    "value": 7
  },
  {
    "userId": userInsertedIds[6],
    "testId": test3InsertedIds[1],
    "value": 4
  }
]).insertedIds;
for(var i = 0; i < userInsertedIds.length; i++) {
  db.getCollection('user').update({ '_id': userInsertedIds[i] }, { $push: { 'groups': groupInsertedIds } })
}
for(var i = 0; i < groupInsertedIds.length; i++){
  db.getCollection('group').update({'_id': groupInsertedIds[i]}, { $push: {'lessonsId': lessonInsertedIds[i]}})
}
db.getCollection('group').update({'_id': groupInsertedIds[0]}, { $push: {'lessonsId': lessonInsertedIds[3]}});
for(var i = 0; i < 3; i++){
  db.getCollection('test').update({'_id': test1InsertedIds[0]}, { $push: {'gradesId': gradeInsertedIds[i]}});
  db.getCollection('test').update({'_id': test1InsertedIds[1]}, { $push: {'gradesId': gradeInsertedIds[i+3]}});
  db.getCollection('test').update({'_id': test2InsertedIds[0]}, { $push: {'gradesId': gradeInsertedIds[i+6]}});
  db.getCollection('test').update({'_id': test2InsertedIds[1]}, { $push: {'gradesId': gradeInsertedIds[i+9]}});
  db.getCollection('test').update({'_id': test3InsertedIds[0]}, { $push: {'gradesId': gradeInsertedIds[i+12]}});
  db.getCollection('test').update({'_id': test3InsertedIds[1]}, { $push: {'gradesId': gradeInsertedIds[i+15]}});
}


