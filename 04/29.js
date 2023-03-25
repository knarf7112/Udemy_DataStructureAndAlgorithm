
function isSubsequence(str1, str2) {
  if (str1.length === 0) {
    return true;
  }

  let pointer1 = 0;
  let pointer2 = 0;

  // loop origin str
  while(pointer2 < str2.length) {
    // 若字母相同,就移到下一個字母
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
    }

    // 若 pointer1 已經等同str1長度,表示 subsequence 存在
    if (pointer1 > str1.length) {
      return true;
    }

    // 不論有沒有匹配都要移動要被匹配的字串索引位置
    pointer2++;
  }

  return false
}

console.log('Case 1', isSubsequence('hello', 'hello Dear')); // true  (若把' ', 'D', 'e', 'a', 'r' 刪除後所剩的剛好就是 'hello')
console.log('Case 2', isSubsequence('book', 'brooklyn')); // true (若把'r', 'k', 'l', 'y', 'n' 刪除後所剩的剛好就是 'book')
console.log('Case 3', isSubsequence('abc', 'bac')); // false (order matters)

// my solution
function isSubsequence2(str, originStr) {
  // 紀錄當前指向的 str 位置
  let index = 0;

  // loop 查找 originStr
  for (let i = 0; i < originStr.length; i++) {
    // 若已經存在 subsequence 就離開 loop
    if (index === str.length) {
      break;
    }
    // 若匹配就將索引+1,接者找下個字母
    if (originStr[i] === str[index]) {
      index++;
    }
  }
  
  // 若找完後的索引等同於 str 長度表示存在此 subsequence 字串
  if (index === str.length) {
    return true;
  }

  return false
}

console.log('[my]Case 1', isSubsequence2('hello', 'hello Dear')); // true  (若把' ', 'D', 'e', 'a', 'r' 刪除後所剩的剛好就是 'hello')
console.log('[my]Case 2', isSubsequence2('book', 'brooklyn')); // true (若把'r', 'k', 'l', 'y', 'n' 刪除後所剩的剛好就是 'book')
console.log('[my]Case 3', isSubsequence2('abc', 'bac')); // false (order matters)
console.log('[my]Case 4', isSubsequence2('', 'bac')); // true (空字串也是一種 subsequence)