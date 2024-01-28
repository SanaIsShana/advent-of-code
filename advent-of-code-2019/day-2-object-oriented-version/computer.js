// Object computer has one attribute and three functions 
module.exports = class Computer { 
  constructor(incodeArray) {
    this.incodeArray = incodeArray
  }

  getPositionZero() { 
    let array = [...this.incodeArray]

    // Loop through array and forward 4 positions each time
    for (let i = 0; i < array.length; i += 4) { 
      let opcode = array[i]
      let numA = array[array[i + 1]]
      let numB = array[array[i + 2]]
      let position = array[i + 3]

      // Check opcode
      if (opcode === 1) {
        array[position] = numA + numB
      } else if (opcode === 2) {
        array[position] = numA * numB
      } else if (opcode === 99) { 
        return array[0]
      }
    }
  }

  // Part one
  partOne() { 
    this.incodeArray[1] = 12
    this.incodeArray[2] = 2
    console.log("Part one answer is: ", this.getPositionZero())
  }

  // Part two
  partTwo() {
    // Create an array with value from 0 to 99
    let numbers = Array.from(Array(100).keys())

    for (let noun of numbers) { 
      for (let verb of numbers) { 
        // Replace address/position one with noun and address/position with verb
        this.incodeArray[1] = noun
        this.incodeArray[2] = verb

        // Get position zero's value
        let value = this.getPositionZero()

        if (value === 19690720) { 
          console.log('Part two answer is: ', 100 * noun + verb)
        }
      }
    }
  }
}