use("AiMl");

// db.students.aggregate([

//   {// match
//     $match:{
//       attendance:{
//         $gte:80
//       }
//     }

//   },
//   {// group

//     $group:{
//       _id:'$course'
//     }

//   }
// ])

// db.students.aggregate([
//   {$project: {
//     name: 1, course: 1
//   }}
// ])


// Find students who belong to cse source

db.students.aggregate([
  {$match: {
    course: 'CSE'
  }}
])


