'use strict'


let models = require('../models/models.js');
let helper = require('../routes/helpers.js');
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
    if (req.xhr) {
        res.send(helper.getCatImage(req.query));
    } else {
        res.sendFile(helper.getCatImage(req.query, true));
    }
};

let getCatPOST = function (req, res) {
    res.sendFile(helper.getCatImage(req.body, true));
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