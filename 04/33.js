function uniqueLetterString(str) {
  let start = 0; // 紀錄substring的起始位置
  let end = 0; // 
  let counter = {};
  let maxLength = -Infinity;

  // 當 end指標還小於字串長度時,就不斷的找
  while (end < str.length) {
    // 若本次的字母已存在於 counter,將start指標一次一次的往右移動(縮小 sliding window)
    if (counter[str[end]]) {
      counter[str[start]]--;// 扣掉才不會讓上方判斷式成立
      start++; // 右移 start指標,移到下一個字母
    } else {
      // 若本次的字母不存在於 counter(放大 sliding window)
      counter[str[end]] = 1;
      end++;

      if ((end - start) > maxLength) {
        maxLength = end - start;
      }
    }
  }

   if (maxLength === -Infinity) {
    console.log('can not find unique letters substring.')
    return null;
   }

   return maxLength;
}

console.log('uniqueLetterString("thisisshowwedoit")', uniqueLetterString('thisisshowwedoit')); // 6
console.log('uniqueLetterString("aaaaaa")', uniqueLetterString('aaaaaa')); // 1
/** My solution */
function uniqueLetterString_my(str) {
  // setup variable
  let maxLength = 0;
  let obj = new Set();
  
  // loop all character
  for (let ch of str) {
    // 若物件有記錄過此字母,就和上次紀錄的比較,若比較大就替換
    // 然後重新初始化紀錄用的物件,因為本次重複,所以初始化完畢後要再把本次的加入該物件紀錄
    if (obj.has(ch)) {
      console.log('obj', obj, ch);
      const currentLength = obj.size;
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
      obj.clear();
      obj.add(ch);
    } else {
      // 若物件沒有記錄過該字母就加入物件裡
      obj.add(ch);
    }
  }

  // 若最後一次loop都沒有重複上面loop檢查不了,所以需要檢查最後一次紀錄的set
  const currentLength = obj.size;
  if (currentLength > maxLength) {
    maxLength = currentLength;
  }

  return maxLength;
}

console.log('uniqueLetterString_my("thisisshowwedoit")', uniqueLetterString_my('thisisshowwedoit')); // 6
console.log('uniqueLetterString_my("aaaaaa")', uniqueLetterString_my('aaaaaa')); // 1