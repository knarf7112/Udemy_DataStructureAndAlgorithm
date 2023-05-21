let heapSize;
let arr = [15, 3, 17, 18, 20, 2, 1, 666];

function buildMaxHeap() {
  heapSize = arr.length - 1;
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxHeapify(i);
  }
}

function maxHeapify(i) {
  let largest;// 用來記錄目前最大值的索引位置
  let left = 2 * i + 1;  // 定位左邊 child node的索引
  let right = 2 * i + 2; // 定位右邊 child node的索引
  // 若左邊索引沒超過陣列範圍且值比父層大就替換 largest 成 left 索引
  if (left <= heapSize && arr[left] > arr[i]) {
    largest = left;
  } else {
    largest = i; // 否則就是原本的父層索引
  }

  // 若右邊索引沒超過陣列範圍且值比父層大就替換 largest 成 right 索引
  if (right <= heapSize && arr[right] > arr[largest]) {
    largest = right;
  }

  // 若最大值的索引不是父層索引 (紀錄最大值的索引位置有變動)
  if (largest !== i) {
    // 交換值
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    // 然後繼續遞迴檢查 child node
    maxHeapify(largest)
  }
}

function heapSort() {
  buildMaxHeap(); // 先將 Binary Tree 轉成 Max Heap
  for (let i = arr.length - 1; i >= 0; i--) {
    // 將 root 和最右下的node交換, 然後縮減陣列範圍(因為已將每次的最大值放到後面的位置)
    let temp = arr[0];
    arr[0] = arr[heapSize];
    arr[heapSize] = temp; // 本次最大的值

    heapSize = heapSize - 1; // 縮減範圍
    maxHeapify(0);// 重新整理 Max Heap
  }

  return arr;
}

const sortedArr = heapSort();

console.log('sorted arr', sortedArr); // [1,  2,  3,  15, 17, 18, 20, 666]