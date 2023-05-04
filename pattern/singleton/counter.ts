// 잘 못된 예시
// let counter = 1;
//
// class Counter {
//     getInstance() {
//         return this;
//     }
//     getCounter() {
//         return counter;
//     }
//     increment() {
//         return ++counter;
//     }
//     decrement() {
//         return --counter;
//     }
// }
//
// const counter1 = new Counter();
// const counter2 = new Counter();
// console.log(counter1.getInstance() === counter2.getInstance()); // should be false

let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("you can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }
  getCounter() {
    return counter;
  }
  increment() {
    return ++counter;
  }
  decrement() {
    return --counter;
  }
}

// const counter1 = new Counter();
// const counter2 = new Counter();
// Error: you can only create one instance!

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
