abstract class Vehicle {
    constructor(public brand: string) {
        this.brand = brand;
    }

    abstract startEngine(): void; // Abstract method

    displayBrand(): void {
        console.log(`Brand: ${this.brand}`);
    }
}

class Car extends Vehicle {
    startEngine(): void {
        console.log(`Car engine started for ${this.brand}...`);
    }
}

class Motorcycle extends Vehicle {
    startEngine(): void {
        console.log(`Motorcycle engine started for ${this.brand}...`);
    }
}

let myCar = new Car("Malibu");
myCar.displayBrand(); // Output: Brand: Malibu
myCar.startEngine(); // Output: Engine started for Malibu...

let myMotorcycle = new Motorcycle("Kawasaki Z");
myMotorcycle.displayBrand(); // Output: Brand: Kawasaki
myMotorcycle.startEngine(); // Output: Engine started for Kawasaki...