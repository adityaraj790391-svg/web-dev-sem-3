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

// db.students.aggregate([
//   {$match: {
//     'course': 'CSE'
//   }}
// ])


// db.students.aggregate([
//   {$match: {
//     'attendance': {
//       $gt : 85
//     }
//   }}
// ])


// db.students.aggregate([
//   {$match: {
//     'course': 'BCA', 'attendance' :{
//       $gte : 85
//     }
//   }}
// ])

db.students.aggregate([
  {$match: {
    'marks.math': {
      $gt : 80
    }
  }}
])

// find no of students in each course

db.students.aggregate([
  {
    $group: {
      _id : '$course',
      numberofstudents: {
        $sum : 1
      }
    }
  }
])


// find the avearage attendance of each course


db.students.aggregate([
  {
    $group: {
      _id : '$course',
      numberofstudents: {
        $sum : 1
      }
    }
  }
])


