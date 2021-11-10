function findShortestString(arr) {
  // type your code here
  const stringLengths = arr.map(str => {
    return str.length
  })

  const shortestLength = Math.min(...stringLengths)

  return arr.find(str => str.length === shortestLength)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("Expecting: 'pp'");
  console.log("=>", findShortestString(['pp', 'cat', 'hi', 'dog', 'an']));

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("Expecting: 'tt'");
  console.log("=>", findShortestString(['cat', 'tt', 'hi', 'dog', 'an']));

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE

  const startTime = new Date()

  const longInput = []

  while(longInput.length < 100) {
    longInput.push(Math.random().toString())
  }

  for(let i=0; i < 1000; i++) {
    findShortestString(["dog", "cat", "bird"])
    findShortestString(longInput)
  }

  const averageRuntime = (new Date() - startTime) / 2000
  console.log(averageRuntime)
}

module.exports = findShortestString;

// Please add your pseudocode to this file

// Collect the lengths of all strings
// Find the shortest length
// Find and return the string with that length from the original array

// And a written explanation of your solution

//see pseudocode
