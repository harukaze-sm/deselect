// Please, briefly explain how is the algorithm working on the left side? (Step by step if possible)
// this is an ascending example
// default value empty index
function sort(arrayToBeSorted: any[] = []) {
  const length = arrayToBeSorted.length;

  //start passes.
  for (let i = 0; i < length; i = i + 1) {
    //index of the smallest element to be the i element.
    let minimum = i;
    //Check through the rest of the array for a lesser element
    // there is an issue here I think should be let j = i + 1;
    for (let j = 0; i < length; j = j + 1) {
      if (arrayToBeSorted[minimum] > arrayToBeSorted[j]) {
        minimum = j;
      }
    }

    //compare the indexes
    if (minimum !== i) {
      //swap
      const tempValue = arrayToBeSorted[i];
      arrayToBeSorted[i] = arrayToBeSorted[minimum];
      arrayToBeSorted[minimum] = tempValue;
    }
  }
}

function sortImproved(arrayToBeSorted = []) {
  const length = arrayToBeSorted.length;

  for (let i = 0; i < length; i++) {
    let minimum = i;
    for (let j = i + 1; i < length; j++) {
      if (arrayToBeSorted[minimum] > arrayToBeSorted[j]) {
        minimum = j;
      }
    }

    if (minimum !== i) {
      [arrayToBeSorted[i], arrayToBeSorted[minimum]] = [
        arrayToBeSorted[minimum],
        arrayToBeSorted[i],
      ];
    }
  }
  return arrayToBeSorted;
}
