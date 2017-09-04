#!/usr/bin/env node

var chalk       = require("chalk");
var clear       = require("clear");
var figlet      = require("figlet");
var inquirer    = require("inquirer");

var utils       = require("./lib/utils");





clear();
console.log(
  chalk.yellow(
    figlet.textSync('React CLI', { horizontalLayout: 'full' })
  )
);

function getApplicationDetails(cb) {

    var questions = [
        {
            name: 'Application',
            type: 'input',
            message: 'Enter your applicaiton name',
            validate: function( value ) {
              if (value.length) {
                return true;
              } else {
                return 'Please enter your application name';
              }
            }
          }
    ];

    inquirer.prompt(questions).then(cb);
}

getApplicationDetails(function() {
    console.log(arguments);
})
