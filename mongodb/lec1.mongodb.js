use("AiMl")
db.createCollection("students")

// db.students.insertOne({   // to make data
//    "Name":"Alex",
//    "age":2,
//    "rollno":"123456"
// })

// db.students.insertMany([
//    {
//        "Name":"Alex",
//        "age":2,
//        "rollno":"1234567"
//    },
//    {
//        "Name":"John",
//        "age":3,
//        "rollno":"1234678"
//    }])

// db.students.find() // to read data many documents

// db.students.findOne({"rollno":"12345"}) 
// to read data of a particular student

//  to update data

// db.students.updateOne({
//    "rollno":"1234567"
//    {
//     $set:{
//         "name":"Hemant"
//        }
// }
// })

// db.students.updateMany(
//     {"rollno":"1234567"},
//     {
//         $set:{
//             "name":"Hemant"
//         }
//     }
// )


// delete one

// db.students.deleteOne({
//   "rollno": "1234567"
// })

// delete many

// db.students.deleteMany({
//   "rollno": "1234567"
// }