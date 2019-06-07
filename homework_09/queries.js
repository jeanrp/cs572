// db.zips.find({})

/* 1 */
// db.zips.aggregate([ 
//     {$match: { state: "WA" } },
// 
//     {$group: { _id: "$state", zip_codes :{ $addToSet: "$_id"}  }} ])
//     
// 
// 

/* 2 */
//     db.zips.aggregate([
//         {$match: { pop: { $lt : 5000  }} },
//         {$project: { _id: 0 , zipCode: "$_id" }}    
//     ])

/* 3 */
//     db.zips.aggregate([
//         {$group: { _id: { city: "$city", state : "$state"} , count: { $sum: 1} }},        
//         {$project: { _id: 0, city : "$_id"  }  },
//         {$sort: { state: 1, city: 1 }  },
//         {$project: { city: "$city.city" } }
//     ]);      
        
/* 4 */


// db.zips.aggregate([
//     {$group: { _id: { city: "$city", state: "$state" }, population : { $sum : "$pop" }  } },
//     {$sort : { "_id.state": 1 } }
// ]) 
        
//     
// db.zips.aggregate([
//     {$group: { _id: { city: "$city", state: "$state" }, population : { $sum : "$pop" }  } },    
//     {$sort : { "_id.state": 1, population : 1 } },
//     {$group: { _id : "$_id.state", city: { $first: "$_id.city" }, population: { $min: "$population" }}},
//     {$project: { _id: 0, state: "$_id", city: 1, population: 1 }} ,
//     {$sort: { population: 1, state: 1} }
// ])
// 

// db.zips.find({pop: 0}).sort({ pop: 1, state: 1})

