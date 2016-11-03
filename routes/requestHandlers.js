'use strict'

let models = require('../models/models.js');

// Models

let Robot = models.Robot;

//

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

let sayHi = function (req, res) {
    res.send("<h3>Who's there?</h3>");
};

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


//

let requestHandlers = {
    sayHi,
    home,
    findRobot,
    createRobot
}

module.exports = requestHandlers;