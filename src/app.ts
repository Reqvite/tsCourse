// const button = document.querySelector("button")!;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });

// Create a log decorator that logs the arguments and return value of a method each time it's called.

// function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     const result = original.apply(this, args);
//     console.log(`[${args.join(", ")}] => ${result}`);
//     return result;
//   };

//   return descriptor;
// }

// class Calculator {
//   @Log
//   add(a: number, b: number): number {
//     return a + b;
//   }
// }

// const calculator = new Calculator();
// calculator.add(1, 2); // logs: [1, 2] => 3
// calculator.add(3, 4); // logs: [3, 4] => 7
