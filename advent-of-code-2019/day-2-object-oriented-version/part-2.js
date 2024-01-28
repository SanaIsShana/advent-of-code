const Computer = require("./computer")
const { intcodeArray } = require("./fileConverter")

// Create a new computer object and call part two 
const computer = new Computer(intcodeArray)
computer.partTwo()
