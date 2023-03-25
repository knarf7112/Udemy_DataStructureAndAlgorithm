function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while(left <= right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}


console.log('Case 1', palindrome('awesome')); // false
console.log('Case 2', palindrome('foobar')); // false
console.log('Case 3', palindrome('tacocat')); // true
console.log('Case 4', palindrome('amanaplanacanalpanama')); // true


// my solution
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while(left <= right) {
    // 若左右索引位置的字母不同就表示非"迴文"
    if (str[left] !== str[right]) {
      return false;
    }

    // 因為字母相同,所以就往內縮一步索引位置並繼續檢查
    left++;
    right--;
  }

  return true;
}

console.log('[my]Case 1', isPalindrome('awesome')); // false
console.log('[my]Case 2', isPalindrome('foobar')); // false
console.log('[my]Case 3', isPalindrome('tacocat')); // true
console.log('[my]Case 4', isPalindrome('amanaplanacanalpanama')); // true