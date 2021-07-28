export class Animal {
  constructor(type, legs) {
    //so constructor here is assigning value to our class.
    this.type = type;
    this.legs = legs;
  }
  get data() {
    console.log(`${this.type} has ${this.legs} legs`);
  }
}
export class Cat extends Animal {
  makeNoise(sound = "MEOW") {
    console.log(sound);
  }
}
