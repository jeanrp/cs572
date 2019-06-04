const express = require('express');
const jsonValidationMiddleware = require('../middlewares/json-validation');
const router = express.Router();

let grades=[{id:"1",name:"name 1",course:"course 1",grade:"grade 1"},{id:"2",name:"name 2",course:"course 2",grade:"grade 2"},{id:"3",name:"name 3",course:"course 3",grade:"grade 3"},{id:"4",name:"name 4",course:"course 4",grade:"grade 4"},{id:"5",name:"name 5",course:"course 5",grade:"grade 5"},{id:"6",name:"name 6",course:"course 6",grade:"grade 6"},{id:"7",name:"name 7",course:"course 7",grade:"grade 7"},{id:"8",name:"name 8",course:"course 8",grade:"grade 8"},{id:"9",name:"name 9",course:"course 9",grade:"grade 9"},{id:"10",name:"name 10",course:"course 10",grade:"grade 10"}];

 
router.get('/', (req,res,next) => 
{
    res.json(grades);    
});


router.get('/:id(\\d+)', (req,res,next) => 
{    
    res.json(grades.filter(x => x.id === req.params.id));
});
 
router.delete('/:id(\\d+)', (req,res,next) => 
{
    let grade = grades.filter( x=> x.id === req.params.id);
    grades = grades.filter(x => x.id !== req.params.id);
    res.json(grade);    
});

router.post('/',express.json(), jsonValidationMiddleware,  (req,res,next) => 
{ 
    grades.push(req.body);
    res.json(grades);
});

module.exports = router;