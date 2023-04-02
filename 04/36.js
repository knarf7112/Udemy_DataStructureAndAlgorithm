function fs(n) {
  if (n === 0) {
    return 0;
  } else if ( n === 1) {
    return 1;
  } else {
    // 
    return fs(n - 1) + fs(n - 2);
  }
}

for (let n = 0; n < 15; n++) {
  console.log(`f(${n}) = ${fs(n)}`);
}
/**
 * Result:
 *  f(0) = 0
 *  f(1) = 1
 *  f(2) = 1
 *  f(3) = 2
 *  f(4) = 3
 *  f(5) = 5
 *  f(6) = 8
 *  f(7) = 13
 *  f(8) = 21
 *  f(9) = 34
 *  f(10) = 55
 *  f(11) = 89
 *  f(12) = 144
 *  f(13) = 233
 *  f(14) = 377
 */