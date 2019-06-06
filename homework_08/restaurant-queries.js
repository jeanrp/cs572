/*  1  */
//db.restaurants.find({})

/*  2  */
// db.restaurants.find({}).projection({restaurant_id: 1, name: 1, district: 1, cuisine: 1})

/* 3 */ 

// db.restaurants.find({}).projection({restaurant_id: 1, name : 1, district: 1, cuisine: 1, _id  :0})


/*  4  */
// db.restaurants.find({}).projection({ restaurant_id: 1, name: 1, district: 1, _id : 0, "address.zipcode": 1  })


/*  5   */

// db.restaurants.find({ district: 'Bronx' })

/*    6  *  /


// db.restaurants.find({district: 'Bronx'}).limit(5)


/*     7      */

// db.restaurants.find({district: 'Bronx'}).skip(5).limit(5).count(1)


/*    8      */


// db.restaurants.find({ 'address.coord' : { $lt:-95.754168  } })

/*    9       */


// 
// db.restaurants.find({
//     $and: [
//             {
//                 cuisine:
//                 {
//                     $ne: 'American '
//                 }
//             },
//             {
//                 grades:
//                 {
//                     $elemMatch: {
//                         score:
//                         {
//                             $gt: 70
//                         }
//                     }
//                 }
//             },
//             {
//                 'address.coord':
//                 {
//                     $lt: -65.754168
//                 }
//             }
//         ]
// });
// 

/* 10 */

// db.restaurants.find({ name : { $regex: /^Wil/ }}, { restaurant_id : 1, name : 1, district: 1, cuisine: 1, _id: 0})



/* 11 */

// db.restaurants.find({ name : { $regex: /ces$/}}, { restaurant_id : 1, name : 1, district: 1, cuisine: 1, _id: 0})


/* 12 */

// db.restaurants.find({ name : { $regex : 'Reg' }} , { restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0})

/* 13 */

// db.restaurants.find({ district: 'Bronx', cuisine: { $in: ['American ', 'Chinese']}})


/* 14 */


// db.restaurants.find({ $or: [ {district:"Staten Island"}, {district:"Queens"}, {district:"Bronx"}, {district:"Brooklyn"} ]}, { restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0})


/* 15 */
// db.restaurants.find({ district: { $nin: ['Staten Island','Queens','Bronx','Brooklyn'] } }).count()


/* 16 */


// db.restaurants.find({"grades.score" : { $not: {$gt : 10}} }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0 }) 

//OR


// db.restaurants.find({ grades: { $elemMatch: { score: {  $lte: 10 } }  } }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0})

//OR


// db.restaurants.find({"grades.score" : { $lte : 10} }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0 })

//OR


// db.restaurants.find({"grades" : {$elemMatch:  { "score": { $not: {$gt : 10}} }}}, { restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0 })


 

 /* 17 */ 
 
//  db.restaurants.find({"address.coord.1": { $gt: 42, $lte: 52 } }, {restaurant_id: 1, name: 1, address: 1})



 /* 18 */
 
//  db.restaurants.find({}).sort({name: 1});

/* 19 */

// db.restaurants.find({}).sort({name : -1});


/* 20 */


// db.restaurants.find({}).sort({ cuisine: 1, district: -1})

/* 21 */


// db.restaurants.find({"address.coord" : { $type: "double" }}).count()


/* 22 */


// db.restaurants.find({ name: { $regex: /^Mad/ } }, { name: 1,  district: 1, 'address.coord' : 1, cuisine: 1  })




