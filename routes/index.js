'use strict'

let home = function(req, res){
    res.render('home', {"animals": [
    {animal: "dogs", food: "cats"},
    {animal: "cats", food: "mice"},
    {animal: "mice", food: "cheese"}
   ]
   });
}

module.exports.home = home;
