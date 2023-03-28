const case1_result = minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60); // [7, 14, 30, 12] => length:2, sum:63
console.log('case 1:minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60)', case1_result);

const case2_result = minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 60, 30, 12], 60); // [60] => length:1, sum:60
console.log('case 2:minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 60, 30, 12], 60)', case2_result);

const case3_result = minSubLength([60, 8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60); // [60] => length:1, sum:60
console.log('case 3:minSubLength([60, 8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60)', case3_result);

const case4_result = minSubLength([60, 8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 1500); // not found => length: -1, sum: none
console.log('case 4:minSubLength([60, 8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 1500)', case4_result);

function minSubLength(arr, sum) {
  // setup pointer
  let start = 0;
  let end = 0;
  let total = 0;
  let minLength = Infinity;

  while (start < arr.length) {
    // 檢查總和是否小於目標且end還沒到底
    if (total < sum && end < arr.length) {
      total += arr[end]; // 累積目前總計
      end++; // 將end指標往後移一格
    } else if (total >= sum) {
      // 若大於等於目標,檢查一下當前的長度是否比之前的小,
      // 若是則替換掉,並且扣掉start的值然後 start + 1 (右移slide window)
      let currentLength = end - start;
      if (currentLength < minLength) {
        minLength = currentLength;
      }
      
      total -= arr[start];
      start++;
    } else if (end >= arr.length) {
      // 若 end 指標已超過陣列長度就必須離開此loop
      break;
    }
  }

  // 若找不到任何累積值大於等於目標值返回 -1 ,否則返回最小長度
  if (minLength === Infinity) {
    console.log('can not find sub array that can sum up to the given number');
    return -1;
  } else {
    return minLength;
  }
}

/*********************************************/
/** my: 依據提示自己寫的方法如下 */
function minSubLength2(arr, target) {
  // 設定起始和結束位置
  let start = 0;
  let end = 0;
  let currentSum = arr[0];
  let minLength = Number.POSITIVE_INFINITY;
  
  // 終止條件: 當end指標已經指到最後一個位置且當前累積值小於目標,因為扣掉start + 1的值就更不可能達到目標(陣列均正整數)了
  while (end < arr.length || currentSum < target) {
    console.log(`start:${start}, end:${end}, current_sum:${currentSum}`);
    // 若目前累積值小於目標, end + 1 且目前累積值也加上 end 索引位置的值
    if (currentSum < target) {
      end++;
      currentSum += arr[end];
    }
    
    // 若目前累積值大於或等於目標
    if (currentSum >= target) {
      const currentLength = end - start + 1; // 目前索引長度
      // 和上次紀錄的長度比較,若比較小就替換掉,否則就保留上次的
      minLength = currentLength < minLength ? currentLength : minLength;
      console.log('[hit]', minLength, currentLength);
      // 扣除本次的 start 索引位置的值並將 start + 1 (將sliding window往右移動一個單位)
      currentSum -= arr[start];
      if (start === end) end++;
      start++;
    }
  }
  
  // 若找不到就返回 -1
  if (minLength === Number.POSITIVE_INFINITY) {
    return -1;
  }

  return minLength;
}
const case1_my_result = minSubLength2([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60); // [7, 14, 30, 12] => length:2, sum:63
console.log('[my]case 1:minSubLength2([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60)', case1_my_result);

const case2_my_result = minSubLength2([8, 1, 6, 15, 3, 16, 5, 7, 14, 60, 30, 12], 60); // [60] => length:1, sum:60
console.log('[my]case 2:minSubLength2([8, 1, 6, 15, 3, 16, 5, 7, 14, 60, 30, 12], 60)', case2_my_result);

const case3_my_result = minSubLength2([60, 8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60); // [60] => length:1, sum:60
console.log('[my]case 3:minSubLength2([60, 8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60)', case3_my_result);

const case4_my_result = minSubLength2([60, 8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 1500); // not found => length: -1, sum: none
console.log('[my]case 4:minSubLength2([60, 8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 1500)', case4_my_result);