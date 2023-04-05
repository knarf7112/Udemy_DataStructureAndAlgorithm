let unsorted = [14, -1, 17, 6, 22, 1, -5];

function insertionSort(arr) {
  for (let j = 1; j <= arr.length - 1; j++) {
    let key = arr[j];
    let i = j - 1;

    while ((i >= 0) && (arr[i] > key)) {
      arr[i + 1] = arr[i];
      i -= 1;
    }

    arr[i + 1] = key;
  }

  return arr;
}

console.log('insertionSort([14, -1, 17, 6, 22, 1, -5])', insertionSort(unsorted));// [-5, -1,  1, 6, 14, 17, 22] 

/**********************************************/
function insertionSort_my(arr) {
  for (let j = 1; j <= arr.length - 1; j++) {
    let key = arr[j]; // 紀錄當前的值
    let i = j - 1; // 取得當前所引的前一個

    // 若排序過的當前指向值比 key 大,就表示要交換
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i]; // 將排序過的往右推
      i--; // 往左移動
    }

    arr[i + 1] = key; // 如果上面有交換, 那就表示左方排序過的陣列中間多了一格要補,所以補上
  }

  return arr;
}

let case1 = [4, 1, 2, 5, 3, 7];

console.log('[my]insertionSort_my([4, 1, 2, 5, 3, 7])', insertionSort_my(case1)); // [ 1, 2, 3, 4, 5, 7 ]