const fs = require('node:fs')

// Convert the input file to an integer array
const intcodeArray = fs.readFileSync('../input.txt').toString().split(',').map((string) => parseInt(string))

module.exports = {intcodeArray}