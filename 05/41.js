let unsorted = [14, -4, 17, 6, 22, 1, -5];

function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let minIndex = i;
    // find smallest
    for(let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // swap arr[minIndex] and arr[i]
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

console.log('selectionSort([14, -4, 17, 6, 22, 1, -5])', selectionSort(unsorted));// [ -5, -4,  1, 6, 14, 17, 22]

/*****************************************************/
function selectionSort_my(arr) {
  // 1. loop 從0 ~ length - 2
  for (let i = 0; i <= arr.length - 2; i++){
    let minIndex = i; // 用來暫時紀錄最小值的索引位置
    // 2. 接下來找最小的值
    for (let j = i; j <= arr.length - 1; j++) {
      // 若當前的值比較小就替換掉minIndex
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 把最小值往左邊交換
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}



let case1 = [4, 1, 2, 5, 3, 7];

console.log('[my]selectionSort_my([4, 1, 2, 5, 3, 7])', selectionSort_my(case1)); // [ 1, 2, 3, 4, 5, 7 ]