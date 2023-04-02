function bubbleSort(arr) {
  let count = 0;// 紀錄到底跑了幾次loop
  // 第一層 loop 用來跑要推送多少次結果到前面
  for (let i = 0; i <= arr.length - 2; i++) {
    // 第二層 loop 用來跑每一次的比較
    for(let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        // swap arr[j] and arr[j - 1]
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        count++;
      }
    }
  }

  console.log(`It takes ${count} steps to complete.`)
  return arr;
}

console.log('Case 1', bubbleSort([4, 1, 5, 2, 7])); // [ 1, 2, 4, 5, 7 ]
console.log('*************************');
let test = [];

// generate random array
for (let i = 0; i < 100; i++) {
  test.push(Math.floor(Math.random() * 100));
}
console.log('test array', test);
console.log('Case 2', bubbleSort(test));

console.log('[Worst Case]Case 3:', bubbleSort([5, 4, 3, 2, 1]));
// n = 5
// 1/2 * n^2 - 1/2 * n
// 25/2 - 5/2 = 10次(要跑10次交換)

// 使用一個flag來優化,假設第一次loop完都沒有任何交換的清況,就表示已經都排序好了
// 就離開 loop, 這樣Big O就可以達到 O(n)
function bubbleSort2(arr) {
  let count = 0;// 紀錄到底跑了幾次loop
  for (let i = 0; i <= arr.length - 2; i++) {
    let swapping = false; // 用這個flag來優化
    for(let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        // swap arr[j] and arr[j - 1]
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        count++;
        swapping = true;
      }
    }
    
    // 如果第一次的loop都沒有交換,表示已排好順序了,就離開loop
    if (swapping === false) {
      break;
    }
  }

  console.log(`It takes ${count} steps to complete.`)
  return arr;
}

console.log('*************************');
console.log('[Best Case]Case 4:', bubbleSort2([1, 2, 3, 4, 0, 5, 6, 7]));
// 只有 0 需要排序
// 所以把 0 推送到前面就結束離開 loop, 這就是此演算最佳的優化
// 所以只需要4次 4,0 -> 3,0 -> 2,0 -> 1,0 -> 下一次loop就會離開整個 loop 結束該方法