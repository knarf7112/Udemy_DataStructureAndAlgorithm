function sameFrequency(str1, str2) {
  let arr1 = str1.split(''); // 將字串轉陣列
  let arr2 = str2.split(''); // 將字串轉陣列

  if (arr1.length !== arr2.length) {
    return false;
  }
  
  let counter1 = {};
  let counter2 = {};

  for(let i = 0; i < arr1.length; i++) {
    // 若 counter存在就累加,若不存在就設定為1
    if (counter1[arr1[i]]) {
      counter1[arr1[i]]++;
    } else {
      counter1[arr1[i]] = 1;
    }
  }

  for(let i = 0; i < arr2.length; i++) {
    // 若 counter存在就累加,若不存在就設定為1
    if (counter2[arr2[i]]) {
      counter2[arr2[i]]++;
    } else {
      counter2[arr2[i]] = 1;
    }
  }

  console.log(counter1, counter2);

  for (let property in counter1) {
    // key 不存在
    if (!counter2[property]) {
      return false;
    }

    // key存在但值不相等
    if (counter1[property] !== counter2[property]) {
      return false;
    }
  }

  return true;
}


console.log('case 1', sameFrequency('abbc', 'aabc')); // false
console.log('case 2', sameFrequency('abba', 'abab')); // true
console.log('case 3', sameFrequency('aasdebasdf', 'adfeebed')); // false