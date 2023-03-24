// class: 設定一個藍圖用來產生圓的面積
class Circle {
  constructor(radius){
    this.radius = radius; // 建構藍圖時,紀錄圓的半徑
  }

  // 
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

let c1 = new Circle(5);
console.log('c1 radius', c1.radius, 'c1 area', c1.getArea());

let c2 = new Circle(10);
console.log('c2 radius', c2.radius, 'c2 area', c2.getArea());