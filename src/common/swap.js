
export const moveUp = (arr, index) => {
    if (index > 0) {
      return swapIndex(arr,index, index - 1);
    }
  }

  export const moveDown = (arr,index) => {
    if (index < arr.length - 1) {
      return swapIndex(arr, index, index + 1);
    }
  }

  const swapIndex =(arr, item1, item2) => {
    let locations = [...arr];
    let tmpProp = locations[item1];
    locations[item1] = locations[item2];
    locations[item2] = tmpProp;
    return locations;
  }