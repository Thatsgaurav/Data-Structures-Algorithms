//#1 -- For loop in Javascript.
// const fish = ['dory', 'bruce', 'marlin', 'nemo'];
// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// const large = new Array(10).fill('nemo');

// function findNemo2(fish) {
//   let t0 = performance.now();
//   for (let i = 0; i < fish.length; i++) {
//     if (fish[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }
//   let t1 = performance.now();
//   console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
// }

// findNemo2(everyone)

// const nemo = ['nemo']
// const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt',
// 'darla', 'hank'];
// const large = new Array(100000).fill('nemo');

// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('Found NEMO!');
//     }
//   }
// }

// findNemo(large); // 0(n) --> Linear Time

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // 0(1)
  console.log(boxes[1]); // 0(1)
}

logFirstTwoBoxes(boxes)