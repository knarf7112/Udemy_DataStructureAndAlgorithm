let arrs = [[[["a", [["b", ["c"]],["d"]]], [["e"]], [[["f", "g", "h"]]]]]];

let result = []; // 用來記錄結果的, 但該如何把這個外部的result轉到該方法裡面呢?

function collector(arr) {
  // loop 該陣列依依檢查
  for (let i = 0; i < arr.length; i++) {
    // 檢查值是否還陣列, 若是就繼續遞迴 
    if (Array.isArray(arr[i])) {
      collector(arr[i]);
    } else {
      result.push(arr[i]); // 不能在裡面宣告陣列, 因為每次遞迴都會產生一個新的陣列,需要靠外部來記錄
    }
  }
}

collector(arrs);
console.log('Case 1 result', result); // ["a", "b", "c", "d", "e", "f", "g", "h"]


function collector2(arr1) {
  // 透過再包一層方法的技巧來記錄原本放在global的結果,就可以包在此方法的scope內
  function helper (arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        helper(arr2[i]);
      } else {
        result.push(arr2[i]);
      }
    }
  }
  
  let result = [];
  helper(arr1);
  return result;
}

let result2 = collector2(arrs);
console.log('Case 1 result2', result2); // ["a", "b", "c", "d", "e", "f", "g", "h"]


/*********************************************/
/** My Solution */
function collector_my(arr, result = []) {
  for(let val of arr) {
    // 若值為陣列就繼續遞迴
    if (Array.isArray(val)) {
      collector_my(val, result);
    } else {
      // 否則將值紀錄起來
      result.push(val);
    }
  }
}

let result_my = [];
collector_my(arrs, result_my);
console.log('[my]Case 1 result', result_my); // ["a", "b", "c", "d", "e", "f", "g", "h"]