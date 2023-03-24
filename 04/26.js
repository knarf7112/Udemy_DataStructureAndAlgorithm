function averagePair(arr, avg) {
  const result = [];
  let count = 0;

  // 因為第2個loop要比第一個loop多1,所以第一個loop要少1(錯開來 => arr[1], arr[2])
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      console.log(`[count:${count}]arr[i] = ${arr[i]}, arr[j] = ${arr[j]}`);// 看看每次的配對

      if ((arr[i] + arr[j]) / 2 === avg) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  
  return result
}

console.log(averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5)); // [ [ -11, 14 ], [ 0, 3 ], [ 1, 2 ] ]

// use pointer
function averagePair2(arr, avg) {
  const result = [];
  let left = 0;
  let right = arr.length - 1;

  // 當右邊索引還大於左邊索引
  while(right > left) {
    // 檢查左右相加的平均是多少
    let temp_avg = (arr[right] + arr[left]) / 2;
    // 若當前的平均值大於目標的平均值,就表示要縮減右指標的範圍
    if (temp_avg > avg) {
      right--;
    } else if (temp_avg < avg) {
      left++;  // 若當前的平均值小於目標的平均值,就表示要縮減左指標的範圍
    } else if (temp_avg === avg) {
      // 等於平均值
      result.push([arr[left], arr[right]]);
      // 左右指標要往內縮才會結束.
      left++;
      right--;
    }
  }
  
  return result
}

console.log(averagePair2([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5)); // [ [ -11, 14 ], [ 0, 3 ], [ 1, 2 ] ]
