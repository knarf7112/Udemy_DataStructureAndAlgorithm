
// 時間複雜度 => O(n^2)
function maxSum(arr, windowSize) {
  let max = Number.NEGATIVE_INFINITY;
  // 若 sliding window size 大於 陣列長度,就收工了
  if (windowSize > arr.length) {
    return null;
  }

  for(let i = 0; i < arr.length - windowSize + 1; i++) {
    let newSum = 0;
    // 計算總和
    for (let times = 0; times < windowSize; times++) {
      newSum += arr[i + times];
    }

    // 若新總和比目前大就替換掉
    if (newSum > max) {
      max = newSum;
    }
  }

  return max;
}

function minSum(arr, windowSize) {
  let min = Number.POSITIVE_INFINITY;
  // 若 sliding window size 大於 陣列長度,就收工了
  if (windowSize > arr.length) {
    return null;
  }

  for(let i = 0; i < arr.length - windowSize + 1; i++) {
    let newSum = 0;
    // 計算總和
    for (let times = 0; times < windowSize; times++) {
      newSum += arr[i + times];
    }

    // 若新總和比目前小就替換掉
    if (newSum < min) {
      min = newSum;
    }
  }

  return min;
}

console.log('maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)', maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // 12
console.log('maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)', maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 2)); // 10
console.log('minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)', minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // -28
console.log('minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)', minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 2)); // -23

/*************************/
// 觀察規則發現每次移動的window差異就是比較頭和尾誰(大|小)
// 時間複雜度可以比上方還少 => O(n)

function maxSum2(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let maxValue = 0;
  // 取得第一次的總和
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  //console.log(maxValue);
  let tempValue = maxValue;
  for (let i = 0; i < arr.length - size + 1; i++) {
    // 每次都替換掉tempValue(扣掉頭再加尾就是新總和)
    tempValue = tempValue - arr[i] + arr[i + size];

    if (tempValue > maxValue) {
      maxValue = tempValue;
    }
  }

  return maxValue;
}

function minSum2(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let minValue = 0;
  // 先計算第一次的總和
  for (let i = 0; i < size; i++) {
    minValue += arr[i];
  }
  
  // [重要]等等用來替換每次的新總和
  let tempSum = minValue;
  // 再loop一次陣列,但每次都
  for (let i = 0; i < arr.length - size + 1; i++) {
    // 新總和 = 上次的總和 - 頭 + 尾
    tempSum = tempSum - arr[i] + arr[i + size];

    // 若本次的總和小於上次的就替換掉
    if (tempSum < minValue) {
      minValue = tempSum;
    }
  }
  return minValue;
}

console.log('maxSum2([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)', maxSum2([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // 12
console.log('maxSum2([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)', maxSum2([2, 7, 3, 0, 6, 1, -5, -12, -11], 2)); // 10
console.log('minSum2([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)', minSum2([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // -28
console.log('minSum2([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)', minSum2([2, 7, 3, 0, 6, 1, -5, -12, -11], 2)); // -23
