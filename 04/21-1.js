let numbers = [
  9,
  12,
  15,
  18,
  19,
  20,
  22,
  25,
  26,
  26,
  33,
  37,
  38,
  41,
  47,
  47,
  50,
  55,
  57,
  60,
  68,
  80,
  87,
  90,
  98,
  100,
  103,
  108,
  109,
  109,
  116,
  120,
  120,
  124,
  127,
  128,
  131,
  135,
  135,
  139,
  143,
  145,
  151,
  155,
  156,
  158,
  163,
  164,
  165,
  169,
  169,
  173,
  174,
  176,
  177,
  178,
  181,
  182,
  182,
  183,
  184,
  189,
  192,
  195,
  200,
  201,
  203,
  204,
  207,
  213,
  217,
  222,
  222,
  222,
  227,
  228,
  233,
  235,
  237,
  239,
  239,
  243,
  248,
  251,
  252,
  257,
  260,
  260,
  263,
  268,
  270,
  271,
  271,
  276,
  281,
  284,
  285,
  295,
  297,
  298,
];

function binarySearch(arr, n) {
  let min = 0; // 設定頭
  let max = arr.length - 1; // 設定尾
  let step = 0; // 紀錄跑了幾次

  // 當最小值還小於等於最大值,就取得陣列的中間索引,
  // 若 n 大於 中間值就將 min 替換成 middle + 1
  // 若 n 小於 中間值就將 max 替換成 middle - 1
  // 若 n 等於 中間值就表示找到了, 返回該索引位置
  // 最後循環都沒找到就返回 -1 表示找不到匹配值  
  while (min <= max) {
    step++;
    let middle = Math.floor((max + min) / 2); // 無條件捨去小數位
    if (n > arr[middle]) {
      min = middle + 1;
    } else if (n < arr[middle]) {
      max = middle - 1;
    } else if (n === arr[middle]) {
      console.log("Found number " + n + " at position " + middle);
      console.log("Found it after " + step + " steps.");
      return middle;
    }
  }

  console.log("Cannot find number " + n);
  return -1;
}

binarySearch(numbers, 213); // 6 - 7 : binary search 平均約6~7次就可以找到
