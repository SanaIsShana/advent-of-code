const Computer = require('./computer')
const { intcodeArray } = require('./fileConverter')

// Create a new computer object and call part one 
const computer = new Computer(intcodeArray)
computer.partOne()