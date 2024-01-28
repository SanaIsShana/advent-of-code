const readline = require("node:readline")
const { stdin: input, stdout: output } = require("node:process")
const { getPositionZero } = require("./utility")

const rl = readline.createInterface({ input, output })
let intcodeArray = []

function checkResult() {
  // Create a new array with value from 0 - 99
  const numbers = Array.from(Array(100).keys())

  // Replace address/position one with noun and address/position with verb
  for (let noun of numbers) {
    for (let verb of numbers) {
      intcodeArray[1] = noun
      intcodeArray[2] = verb

      let value = getPositionZero(intcodeArray)

      // If matches return the answer
      if (value === 19690720) {
        return 100 * noun + verb
      }
    }
  }
}

rl.on("line", (line) => {
  // Read the input and convert it to an array of integers
  intcodeArray.push(...line.split(",").map((string) => parseInt(string)))
}).on("close", () => {
  console.log("The answer is: ", checkResult())
})
