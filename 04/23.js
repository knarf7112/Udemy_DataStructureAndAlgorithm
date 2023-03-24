function intersection(arr1, arr2) {
  const result = [];
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  console.log('result', result);
  return result;
}

intersection([1, 2, 3], [5, 16, 10, 3, 1]); // [1, 3]

intersection([1, 2, 3, 7, 9, 19, 25], [19, 5, 16, 10, 3, 1]); // [1, 3, 19]


// 用counter的方式
function intersection2(arr1, arr2) {
  const result = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};

  for(let i = 0; i < arr3.length; i++) {
    // 若在計數板找不到就新增一筆
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      // 若已存在
      counter[arr3[i]]++;
    }
  }

  console.log('counter', counter);
  // loop over the counter
  for (let property in counter) {
    if (counter[property] >= 2) {
      result.push(property);
    }
  }

  console.log('result', result);
  return result;
}

intersection2([1, 2, 3], [5, 16, 10, 3, 1]); // [1, 3]

intersection2([1, 2, 3, 7, 9, 19, 25], [19, 5, 16, 10, 3, 1]); // [1, 3, 19]
