// // ----------------------- TypeScriptの型システム ----------------------------
// // 型アノテーション
// var num: number = 123;
// function identity(num: number): number {
//   return num;
// }

// // プリミティブ型
// var num: number;
// var str: string;
// var bool: boolean;

// num = 123;
// num = 123.456;
// num = "123"; // Error

// str = "123";
// str = 123; // Error

// bool = true;
// bool = false;
// bool = "false"; // Error

// // 配列
// var boolArray: boolean[];

// boolArray = [true, false];
// console.log(boolArray[0]); // true
// console.log(boolArray.length); // 2
// boolArray[1] = true;
// boolArray = [false, false];

// boolArray[0] = "false"; // Error!
// boolArray = "false"; // Error!
// boolArray = [true, "false"]; // Error!

// // インターフェース
// interface Name {
//   first: string;
//   second: string;
// }

// let test: Name;
// test = {
//   first: "John",
//   second: "Doe",
// };

// test = {
//   // Error : `second` is missing
//   first: "John",
// };
// test = {
//   // Error : `second` is the wrong type
//   first: "John",
//   second: 1337,
// };

// // インラインで型をつける
// var name: {
//   first: string;
//   second: string;
// };
// name = {
//   first: "John",
//   second: "Doe",
// };

// name = {
//   // Error : `second` is missing
//   first: "John",
// };
// name = {
//   // Error : `second` is the wrong type
//   first: "John",
//   second: 1337,
// };

// // void
// function log(message): void {
//   console.log(message);
// }

// // Generics
// function reverse<T>(items: T[]): T[] {
//   var toreturn = [];
//   for (let i = items.length - 1; i >= 0; i--) {
//     toreturn.push(items[i]);
//   }
//   return toreturn;
// }

// var sample = [1, 2, 3];
// var reversed = reverse(sample);
// console.log(reversed); // 3,2,1

// // Safety!
// reversed[0] = "1"; // Error!
// reversed = ["1", "2"]; // Error!

// reversed[0] = 1; // Okay
// reversed = [1, 2]; // Okay

// var strArr = ["1", "2"];
// var reversedStrs = reverse(strArr);

// reversedStrs = [1, 2]; // Error!

// // Union Tyep
// function formatCommandline(command: string[] | string) {
//   var line = "";
//   if (typeof command === "string") {
//     line = command.trim();
//   } else {
//     line = command.join(" ").trim();
//   }

//   // Do stuff with line: string
// }

// // Intersection Type
// function extend<T, U>(first: T, second: U): T & U {
//   return { ...first, ...second };
// }

// const x = extend({ a: "hello" }, { b: 42 });

// // x now has both `a` and `b`
// const a = x.a;
// const b = x.b;

// // タプル型
// var nameNumber: [string, number];

// // Okay
// nameNumber = ["Jenny", 8675309];

// // Error!
// nameNumber = ["Jenny", "867-5309"];

// var nameNumber: [string, number];
// nameNumber = ["Jenny", 8675309];

// var [name, num] = nameNumber;

// // Type Alias
// type StrOrNum = string | number;

// // Usage: just like any other notation
// var sample: StrOrNum;
// sample = 123;
// sample = "123";

// // Just checking
// sample = true; // Error!

// type Text = string | { text: string };
// type Coordinates = [number, number];
// type Callback = (data: string) => void;

// // インターフェース
// // Sample A
// // declare var myPoint: { x: number; y: number };

// // Sample B
// interface Point {
//   x: number;
//   y: number;
// }
// declare var myPoint: Point;

// // Lib a.d.ts
// interface Point {
//   x: number;
//   y: number;
// }
// // declare var myPoint: Point;

// // Lib b.d.ts
// // 型を拡張できる
// interface Point {
//   z: number;
// }

// // Your code
// myPoint.z; // Allowed!

// interface Point1 {
//   x: number;
//   y: number;
// }

// class TestPoint implements Point1 {
//   //   x: number;
//   //   y: number; // Same as Point
//   constructor(public x: number, public y: number) {}
// }

// interface Point {
//   x: number;
//   y: number;
//   z: number; // New member
// }

// // Pointインターフェースが更新されるとエラーになる。（同期できる）
// class MyPoint implements Point {
//   // ERROR : missing member `z`
//   x: number;
//   y: number;
// }

// var foo: Point = new MyPoint();

// interface Crazy {
//   new (): {
//     hello: number;
//   };
// }

// // インターフェースを実装できるとは限らない
// class CrazyClass implements Crazy {
//   constructor() {
//     return { hello: 123 };
//   }
// }
// // Because
// const crazy = new CrazyClass(); // crazy would be {hello:123}

// // Enum

// enum CardSuit {
//   Clubs,
//   Diamonds,
//   Hearts,
//   Spades,
// }

// // Sample usage
// var card = CardSuit.Clubs;

// // Safety (enum値はnumberなのでエラー)
// card = "not a member of card suit"; // Error : string is not assignable to type `CardSuit`

// enum Color {
//   Red,
//   Green,
//   Blue,
// }
// var col = Color.Red;
// col = 0; // Effectively same as Color.Red
// col = 12;

// // 列挙型の文字列バージョンを列挙型の数値または数値バージョンに変換することができる
// enum Tristate {
//   False,
//   True,
//   Unknown,
// }
// console.log(Tristate[0]); // "False"
// console.log(Tristate["False"]); // 0
// console.log(Tristate[Tristate.False]); // "False" because `Tristate.False == 0`

// // 数値列挙型に関連付けられた数値を変更する
// enum Color1 {
//   Red, // 0
//   Green, // 1
//   Blue, // 2
// }

// enum Color2 {
//   DarkRed = 3, // 3
//   DarkGreen, // 4
//   DarkBlue, // 5
// }

// console.log(Color2[3], "color2"); // DarkRed
