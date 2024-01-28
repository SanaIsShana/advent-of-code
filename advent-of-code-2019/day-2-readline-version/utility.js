// Calculates value of the position zero
const getPositionZero = (incodeArray) => { 
  let array = [...incodeArray]
  
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

module.exports = { getPositionZero }