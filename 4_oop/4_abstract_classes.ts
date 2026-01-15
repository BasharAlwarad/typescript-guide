abstract class Product {
  constructor(protected name: string, protected price: number) {
    this.name = name;
    this.price = price;
  }
  info() {}
  abstract baking(): void;
}

class Manufactory extends Product {
  constructor(name: string, price: number, public factory: string) {
    super(name, price);
    this.factory = factory;
  }
  override info() {
    console.log(`product: ${this.name} is for ${this.price}`);
  }
  override baking(): void {
    console.log('bak carefully');
  }
}
