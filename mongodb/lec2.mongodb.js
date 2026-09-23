use("AiMl")

// to find count of retreiving documents
// db.students.find().count()

db.students.find().skip(3).limit(5)