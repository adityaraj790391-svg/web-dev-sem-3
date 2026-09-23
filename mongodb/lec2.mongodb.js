use("AiMl")

// to find count of retreiving documents
// db.students.find().count()

// db.students.find().skip(3).limit(5)

db.students.find({},{_id:0, studentId:1, name:1, course:1});


db.students.find({'age':{$lte:18}},{_id:0, attendance:1, name:1, age:1, marks:1, course:1});


// to find the range doc
db.students.find({'attendance':{$gte:80, $lte:90}})

// 