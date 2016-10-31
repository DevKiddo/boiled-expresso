'use strict'


let models = require('../models/models.js');
let Robot = models.Robot;

// Welcome home 

let home = function (req, res) {
    res.render('home', {
        robots: [
            { robot: "terminator", food: "cats" },
            { robot: "hellokitty", food: "mice" },
            { robot: "jerry", food: "cheese" }
        ]
    });
}

//

let findRobot = function (req, res) {
    Robot.find({ abilities: { $in: ["lovebutactuallyhate", "lifeispink"] } }, function (err, result) {
        res.send(result);
    });
}

//

let createRobot = function (req, res) {
    let robot = new Robot({
        name: 'hellokitty',
        abilities: ['lovebutactuallyhate', 'lifeispink', 'flowersareblue', 'rainbowpoop'],
        isEvil: true
    });

    robot.save(function (err, robot) {
        if (err) return console.error(err);
        res.render('newrobot', {
            newrobot: robot
        })
    });
}

let getCatGET = function (req, res) {
    console.log(req.query);
    res.end(".");
};

let getCatPOST = function (req, res) {
    console.log(req.body);
    res.end(".");
};

//

let requestHandlers = {
    home: home,
    findRobot: findRobot,
    createRobot: createRobot,
    getCatGET: getCatGET,
    getCatPOST: getCatPOST
}

module.exports = requestHandlers;