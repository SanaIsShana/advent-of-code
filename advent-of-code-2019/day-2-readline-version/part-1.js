const readline = require("node:readline")
const { stdin: input, stdout: output } = require("node:process")
const { getPositionZero } = require("./utility")

const rl = readline.createInterface({ input, output })
let intcodeArray = []

rl.on("line", (line) => {
  // Read the input and convert it to an array of integers
  intcodeArray.push(...line.split(",").map((string) => parseInt(string)))
}).on("close", () => {
  // Replace the position 1 and position 2 values
  intcodeArray[1] = 12
  intcodeArray[2] = 2
  console.log("The answer is: ", getPositionZero(intcodeArray))
})

