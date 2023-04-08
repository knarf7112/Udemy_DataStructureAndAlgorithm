function merge(a1, a2) {
  // 將兩個陣列依序合併再一起
  let result = []; // 紀錄本次合併的結果
  // 兩個指標分別記錄兩個陣列的位置
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] > a2[j]) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }

  // (當兩個陣列中若還有剩餘的值沒推到 result, 就需要把剩餘的值也捕到 result裡面)
  // a1 or a2 might have some elements left
  // use loop to put them all into result
  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }

  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    //
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
  }
}

console.log('test merge: merge([1, 15, 17], [-19, 18, 22])', merge([1, 15, 17], [-19, 18, 22])); // [ -19, 1, 15, 17, 18, 22 ] 
console.log('mergeSort([])', mergeSort([15, 3, 17, 18, 35, 11, 0, 36, -336, 1054])); // [-336, 0, 3, 11, 15, 17, 18, 35, 36, 1054]


/************* My *************/
function mergeSort_my(arr) {
  // 當陣列已經分割到最小了就返回該陣列(只有1個值就表示已排序的陣列)
  if (arr.length === 1) {
    return arr;
  } else {
    // 不斷的將陣列切一半,然後再合併該次被分辦的陣列
    let middle = Math.ceil(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    //console.log('left', left, right);
    // 遞迴拆分陣列,然後再不斷的合併
    return merge_my(mergeSort_my(left), mergeSort_my(right));
  }
}

// 合併兩個已排序的陣列
function merge_my(arr1, arr2) {
  let result = [];
  // 兩個指標指向兩個陣列的頭
  let i = 0;
  let j = 0;

  // 當兩個陣列的指標都還沒到底部時
  while (i < arr1.length || j < arr2.length) {
   // 假設 i 已經超過陣列大小, 但 j 還沒到底部(用來將剩餘的值推到 result)
   if (typeof arr1[i] === 'undefined' && j < arr2.length) {
    result.push(arr2[j]);
    j++;
    continue;
   }

   // 假設 j 已經超過陣列大小, 但 i 還沒到底部(用來將剩餘的值推到 result)
   if (typeof arr2[j] === 'undefined' && i < arr1.length) {
    result.push(arr1[i]);
    i++;
    continue;
   }

    // 若左邊陣列指向的值小於右邊陣列指向的值,將值推入 result, 並且左指標往右移一格
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result;
}

let case1 = [38, 42, 15, 1, 7, 5, 16, 9];
console.log('[my]mergeSort_my([38, 42, 15, 1, 7, 5, 16, 9])', mergeSort_my(case1)); // [1,  5,  7,  9, 15, 16, 38, 42]

let case2 = [30, -1, 22, 13, 1, 8, 5, 16, -13];
console.log('[my]mergeSort_my([30, -1, 22, 13, 1, 8, 5, 16, -13])', mergeSort_my(case2)); // [-13, -1,  1,  5,  8, 13, 16, 22, 30]
