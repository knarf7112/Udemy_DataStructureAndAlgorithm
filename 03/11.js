function algorithm1(n) {
  let sum = 0;
  sum.
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function algorithm2(n) {
  // 總和可以用等差級數來算 = ((首項 + 末項) * 高) / 2  
  return ((1 + n) * n) / 2;
}

let time1Start = global.performance.now();
algorithm1(1000000);
let time1End = global.performance.now();
console.log('演算法1 - 耗時', (time1End - time1Start) / 1000);// 0.003455

let time2Start = global.performance.now();
algorithm2(1000000);
let time2End = global.performance.now();
console.log('演算法2 - 耗時', (time2End - time2Start) / 1000);// 0.000014