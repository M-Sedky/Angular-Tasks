//First Task
class Vehicle {
  color: string;
  type: string;
  constructor(color: string, type: string) {
    (this.color = color), (this.type = type);
  }
}

class Car extends Vehicle {
  price: number;
  constructor(color: string, type: string, price: number) {
    super(color, type);
    this.price = price;
  }
}
var Car1 = new Car("black", "PMW", 1000000);

alert(
  `First Car Data:
     The Color is: ${Car1.color},
     The Type is: ${Car1.type},
     The Price is: ${Car1.price}`
);

var Car2 = new Car("red", "KIA", 300000);

alert(
  `Second Car Data:
     The Color is: ${Car2.color},
     The Type is: ${Car2.type},
     The Price is: ${Car2.price}`
);
