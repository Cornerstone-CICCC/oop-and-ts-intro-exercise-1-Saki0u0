// Create a Car class with private properties for make, model, and year.
// Include a method getCarInfo() that returns the car info as a string.
// Add a method setYear(newYear) that updates the year only if newYear >= the current year.

class Car {
  // YOUR CODE HERE
  constructor(brand,name,year){
    this.brand = brand
    this.name = name
    this._year = year
  }

  get year() {
    return this._year;
  }

  setYear(newYear) {
    this._year = newYear;
  }

  getCarInfo(){
    return `Make: ${this.brand}, Model: ${this.name}, Year: ${this.year}`
  }
}


// TEST CASE / DRIVER CODE
const car1 = new Car("Toyota", "Corolla", 2010);
console.log(car1.getCarInfo()); // Expected output: "Make: Toyota, Model: Corolla, Year: 2010"
car1.setYear(2015); // Should update the year
console.log(car1.getCarInfo()); // Expected output: "Make: Toyota, Model: Corolla, Year: 2015"
car1.setYear(2005); // Should not update the year
console.log(car1.getCarInfo()); // Expected output: "Make: Toyota, Model: Corolla, Year: 2015"