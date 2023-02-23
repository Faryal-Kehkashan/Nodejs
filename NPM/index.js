// import chalk from "chalk";
// console.log(chalk.blue("Hello world!"));

// const { default: chalk } = require("chalk");
const validator = require("validator");

const res = validator.isEmail("faryalkehkashanfoa@gmail.com");
// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
console.log(res);
