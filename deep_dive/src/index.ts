// // スプレッド演算子
// function foo(x: number, y: number, z: number) {
//   console.log(args);
// }
// // as const をつけないとエラーになる。argsの要素の個数が変わる可能性があるため？？
// const args = [0, 1, 2] as const;
// foo(...args);

// const [x, y, ...remaining] = [1, 2, 3, 4];
// console.log(x, y, remaining); // 1,2,[3,4]

// let list = [1, 2];
// list = [0, ...list, 4];
// console.log(list); // [0,1,2,4]

// const point2D = { x: 1, y: 2 };
// const anotherPoint3D = { x: 5, z: 4, ...point2D };
// console.log(anotherPoint3D); // {x: 1, y: 2, z: 4}
// const yetAnotherPoint3D = { ...point2D, x: 5, z: 4 };
// console.log(yetAnotherPoint3D); // {x: 5, y: 2, z: 4}

// for...of
// let someArray = [9, 2, 5];
// for (let item in someArray) {
//   console.log(item); // 0,1,2
// }

// someArray = [9, 2, 5];
// for (let item of someArray) {
//   console.log(item); // 9,2,5
// }

// var hello = "is it me you're looking for?";
// for (var char of hello) {
//   console.log(char); // 次のものが出力されます: is it me you're looking for?
// }

// Iterator
// interface IteratorResult<T> {
//   done: boolean;
//   value: T;
// }

// interface Iterator<T> {
//   next(value?: any): IteratorResult<T>;
//   return?(value?: any): IteratorResult<T>;
//   throw?(e?: any): IteratorResult<T>;
// }

// class Component {
//   constructor(public name: string) {}
// }

// class Frame implements Iterator<Component> {
//   private pointer = 0;

//   constructor(public name: string, public components: Component[]) {}

//   public next(): IteratorResult<Component> {
//     if (this.pointer < this.components.length) {
//       return {
//         done: false,
//         value: this.components[this.pointer++],
//       };
//     } else {
//       return {
//         done: true,
//         value: null,
//       };
//     }
//   }
// }

// let frame = new Frame("Door", [
//   new Component("top"),
//   new Component("bottom"),
//   new Component("left"),
//   new Component("right"),
// ]);

// let iteratorResult1 = frame.next(); //{ done: false, value: Component { name: 'top' } }
// let iteratorResult2 = frame.next(); //{ done: false, value: Component { name: 'bottom' } }
// let iteratorResult3 = frame.next(); //{ done: false, value: Component { name: 'left' } }
// let iteratorResult4 = frame.next(); //{ done: false, value: Component { name: 'right' } }
// let iteratorResult5 = frame.next(); //{ done: true }

// // `value`プロパティを経由して、イテレータの戻り値を取得することができます
// let component = iteratorResult1.value; // Component { name: 'top' }

// console.log(iteratorResult1);
// console.log(iteratorResult2);
// console.log(iteratorResult3);
// console.log(iteratorResult4);
// console.log(iteratorResult5);

// ...
// class Frame implements Iterable<Component> {
//   constructor(public name: string, public components: Component[]) {}

//   [Symbol.iterator]() {
//     let pointer = 0;
//     let components = this.components;

//     return {
//       next(): IteratorResult<Component> {
//         if (pointer < components.length) {
//           return {
//             done: false,
//             value: components[pointer++],
//           };
//         } else {
//           return {
//             done: true,
//             value: null,
//           };
//         }
//       },
//     };
//   }
// }

// let frame = new Frame("Door", [
//   new Component("top"),
//   new Component("bottom"),
//   new Component("left"),
//   new Component("right"),
// ]);
// for (let cmp of frame) {
//   console.log(cmp);
// }

// // ...
// class Frame implements IterableIterator<Component> {
//   private pointer = 0;

//   constructor(public name: string, public components: Component[]) {}

//   public next(): IteratorResult<Component> {
//     if (this.pointer < this.components.length) {
//       return {
//         done: false,
//         value: this.components[this.pointer++],
//       };
//     } else {
//       return {
//         done: true,
//         value: null,
//       };
//     }
//   }

//   [Symbol.iterator](): IterableIterator<Component> {
//     return this;
//   }
// }

// let frame = new Frame("Door", [
//   new Component("top"),
//   new Component("bottom"),
//   new Component("left"),
//   new Component("right"),
// ]);
// for (let cmp of frame) {
//   console.log(cmp);
// }

// class Fib implements IterableIterator<number> {
//   protected fn1 = 0;
//   protected fn2 = 1;

//   constructor(protected maxValue?: number) {}

//   public next(): IteratorResult<number> {
//     var current = this.fn1;
//     this.fn1 = this.fn2;
//     this.fn2 = current + this.fn1;
//     if (this.maxValue != null && current >= this.maxValue) {
//       return {
//         done: true,
//         value: null,
//       };
//     }
//     return {
//       done: false,
//       value: current,
//     };
//   }

//   [Symbol.iterator](): IterableIterator<number> {
//     return this;
//   }
// }

// let fib = new Fib();

// fib.next(); //{ done: false, value: 0 }
// fib.next(); //{ done: false, value: 1 }
// fib.next(); //{ done: false, value: 1 }
// fib.next(); //{ done: false, value: 2 }
// fib.next(); //{ done: false, value: 3 }
// fib.next(); //{ done: false, value: 5 }

// let fibMax50 = new Fib(50);
// console.log(Array.from(fibMax50)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

// let fibMax21 = new Fib(21);
// for (let num of fibMax21) {
//   console.log(num); //Prints fibonacci sequence 0 to 21
// }

// // テンプレートリテラル
// var lyrics = "絶対にあきらめない";
// var html = `<div>${lyrics}</div>`;

// console.log(`1 and 1 make ${1 + 1}`);

// var lyrics = `絶対にあきらめない
// 絶対にがっかりさせない`;

// var say = "手の中にある一羽 > ヤブの中の二羽";
// var html = htmlEscape`<div> 私はこのように言いたい : ${say}</div>`;

// // タグ関数の例
// function htmlEscape(literals: TemplateStringsArray, ...placeholders: string[]) {
//   let result = "";
//   console.log(literals, "literals");
//   console.log(placeholders, "placeholders");

//   // プレースホルダをリテラルに埋め込む
//   for (let i = 0; i < placeholders.length; i++) {
//     result += literals[i];
//     result += placeholders[i]
//       .replace(/&/g, "&amp;")
//       .replace(/"/g, "&quot;")
//       .replace(/'/g, "&#39;")
//       .replace(/</g, "&lt;")
//       .replace(/>/g, "&gt;");
//   }

//   // 最後のリテラルを追加する
//   result += literals[literals.length - 1];
//   return result;
// }

// console.log(html);

// // Promise

// import fs = require("fs");

// function loadJSONSync(filename: string) {
//   return JSON.parse(fs.readFileSync(filename));
// }

// // 正しいjsonファイル
// console.log(loadJSONSync("good.json"));

// // 存在しないファイル: fs.readFileSync が失敗する
// try {
//   console.log(loadJSONSync("absent.json"));
// } catch (err) {
//   // errの型推論はunknownとなる
//   console.log("absent.json error", err.message);
// }

// // 正しくないjsonファイル 例: ファイルは存在するが、JSON.parseが失敗する
// try {
//   console.log(loadJSONSync("invalid.json"));
// } catch (err) {
//   console.log("invalid.json error", err.message);
// }

// import fs = require("fs");

// // 最初に思いつくであろう試みですが、正しくありません.
// function loadJSON(filename: string, cb: (error: Error, data: any) => void) {
//   fs.readFile(filename, function (err, data) {
//     if (err) cb(err);
//     else cb(null, JSON.parse(data));
//   });
// }

// loadJSON("invalid.json", function (err, data) {
//   // JSON.parseがErrorをthrowされるため、このコードは永久に実行されない
//   if (err) console.log("bad.json error", err.message);
//   else console.log(data);
// });

// // 修正してみる
// import fs = require("fs");

// // より改善したバージョンです。しかし、まだ正しくありません。
// // cbが2回呼び出される可能性がある!!

// function loadJSON(filename: string, cb: (error: Error) => void) {
//   fs.readFile(filename, function (err, data) {
//     if (err) {
//       cb(err);
//     } else {
//       try {
//         cb(null, JSON.parse(data));
//       } catch (err) {
//         cb(err);
//       }
//     }
//   });
// }

// // 正しくないJSONファイルのロード
// loadJSON("invalid.json", function (err, data) {
//   if (err) console.log("bad.json error", err.message);
//   else console.log(data);
// });

// // 完全に機能するバージョン
// import fs = require("fs");

// function loadJSON(filename: string, cb: (error: Error) => void) {
//   fs.readFile(filename, function (err, data) {
//     if (err) return cb(err);
//     // すべての同期処理コードをtry catchブロックに含める
//     try {
//       var parsed = JSON.parse(data);
//     } catch (err) {
//       return cb(err);
//     }
//     // コールバックを呼び出す時を除く
//     return cb(null, parsed);
//   });
// }

// const promise = new Promise((resolve, reject) => {
//   // resolve / reject 関数がPromiseの運命を決定します
// });

// const promise = new Promise((resolve, reject) => {
//   resolve(123);
// });
// promise.then((res) => {
//   console.log("I get called:", res === 123); // I get called: true
// });
// promise.catch((err) => {
//   // これは呼び出されません
// });

// const promise = new Promise((resolve, reject) => {
//   reject(new Error("何かひどいことが起きた"));
// });
// promise.then((res) => {
//   // これは呼び出されません
// });
// promise.catch((err) => {
//   console.log("I get called:", err.message); // I get called: '何かひどいことが起きた'
// });

// Promise.resolve(123)
//   .then((res) => {
//     console.log(res); // 123
//     return 456;
//   })
//   .then((res) => {
//     console.log(res); // 456
//     return Promise.resolve(123); // resolveされたPromiseを返しています
//   })
//   .then((res) => {
//     console.log(res); // 123 : resolveされた値で`then`が呼び出されます
//     return 123;
//   });

// // rejectされたPromiseを作成する
// Promise.reject(new Error("何か悪いことが起きた"))
//   .then((res) => {
//     console.log(res); // 呼び出されない
//     return 456;
//   })
//   .then((res) => {
//     console.log(res); // 呼び出されない
//     return 123;
//   })
//   .then((res) => {
//     console.log(res); // 呼び出されない
//     return 123;
//   })
//   .catch((err) => {
//     console.log(err.message); // 何か悪いことが起きた
//   });

// rejectされたPromiseを作成する
// Promise.reject(new Error("何か悪いことが起きた"))
//   .then((res) => {
//     console.log(res); // 呼び出されない
//     return 456;
//   })
//   .catch((err) => {
//     console.log(err.message); // 何か悪いことが起きた
//     return 123;
//   })
//   .then((res) => {
//     console.log(res); // 123
//   });

// Promise.resolve(123)
//     .then((res) => {
//         throw new Error('何か悪いことが起きた'); // 同期処理でエラーを発生させる
//         return 456;
//     })
//     .then((res) => {
//         console.log(res); // 呼び出されない
//         return Promise.resolve(789);
//     })
//     .catch((err) => {
//         console.log(err.message); // 何か悪いことが起きた
//     })

// Promise.resolve(123)
//   .then((res) => {
//     throw new Error("何か悪いことが起きた"); // 同期処理でエラーを発生させる
//     return 456;
//   })
//   .catch((err) => {
//     console.log("first catch: " + err.message); // 何か悪いことが起きた
//     return 123;
//   })
//   .then((res) => {
//     console.log(res); // 123
//     return Promise.resolve(789);
//   })
//   .catch((err) => {
//     console.log("second catch: " + err.message); // 呼び出されない
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Promise.resolve(123)
//   .then((res) => {
//     return 456;
//   })
//   .catch((err) => {
//     console.log("HERE"); // 呼び出されない
//   });

// TypescriptとPromise
// Promise.resolve(123)
//   .then((res) => {
//     // res は `number` 型と推論される
//     return true;
//   })
//   .then((res) => {
//     // res は `boolean` 型と推論される
//   });

// function iReturnPromiseAfter1Second(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Hello world!"), 1000);
//   });
// }

// Promise.resolve(123)
//   .then((res) => {
//     // res は `number` 型と推論される
//     return iReturnPromiseAfter1Second(); // `Promise<string>`を返す
//   })
//   .then((res) => {
//     // res は `string` 型と推論される
//     console.log(res); // Hello world!
//   });

// Promiseを使った場合
// import fs = require("fs");
// function readFileAsync(filename: string): Promise<any> {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, (err, result) => {
//       if (err) reject(err);
//       else resolve(result);
//     });
//   });
// }
// function loadJSONAsync(filename: string): Promise<any> {
//   return readFileAsync(filename) // 直前に作成した関数を使います
//     .then(function (res) {
//       return JSON.parse(res);
//     });
// }

// // 正しいjsonファイル
// loadJSONAsync("good.json")
//   .then(function (val) {
//     console.log(val);
//   })
//   .catch(function (err) {
//     console.log("good.json error", err.message); // 呼び出されない
//   })

//   // 存在しないjsonファイル
//   .then(function () {
//     return loadJSONAsync("absent.json");
//   })
//   .then(function (val) {
//     console.log(val);
//   }) // 呼び出されない
//   .catch(function (err) {
//     console.log("absent.json error", err.message);
//   })

//   // 正しくないjsonファイル
//   .then(function () {
//     return loadJSONAsync("invalid.json");
//   })
//   .then(function (val) {
//     console.log(val);
//   }) // 呼び出されない
//   .catch(function (err) {
//     console.log("bad.json error", err.message);
//   });

// 並列処理
// 何らかのデータをサーバから読み込むことを再現する処理
// function loadItem(id: number): Promise<{ id: number }> {
//   return new Promise((resolve) => {
//     console.log("loading item", id);
//     setTimeout(() => {
//       // サーバーからのレスポンス遅延を再現
//       resolve({ id: id });
//     }, 1000);
//   });
// }

// // Promiseチェーン
// let item1, item2;
// loadItem(1)
//   .then((res) => {
//     item1 = res;
//     return loadItem(2);
//   })
//   .then((res) => {
//     item2 = res;
//     console.log("done");
//   }); // 全体で 2秒 かかる

// // 並列処理
// Promise.all([loadItem(1), loadItem(2)]).then((res) => {
//   [item1, item2] = res;
//   console.log("done");
// }); // 全体で 1秒 かかる

// var task1 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 1000, "one");
// });
// var task2 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 2000, "two");
// });

// Promise.race([task1, task2]).then(function (value) {
//   console.log(value); // "one"
//   // 両方ともresolveされるが、task1の方が早く終わる
// });

// ジェネレータ
// function* infiniteSequence() {
//   var i = 0;
//   while (true) {
//     yield i++;
//   }
// }

// var iterator = infiniteSequence();
// console.log(iterator.next());

// while (true) {
//   console.log(iterator.next()); // { value: xxxx, done: false } forever and ever
// }

// function* generator() {
//   console.log("Execution started");
//   yield 0;
//   console.log("Execution resumed");
//   yield 1;
//   console.log("Execution resumed");
// }

// var iterator = generator();
// console.log("Starting iteration"); // これはジェネレータ関数の本体の前に実行されます
// console.log(iterator.next()); // { value: 0, done: false }
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

// function* generator() {
//   var bar: string = yield "foo";
//   console.log(bar); // bar!
// }

// const iterator = generator();
// // 最初に`yield`された値を取得するまで実行する
// const foo = iterator.next();
// console.log(foo.value); // foo
// // `bar`を注入して処理を再開する
// const nextThing = iterator.next("bar");

// ------------------------- asunc await -----------------------------
// 内部ではジェネレータが使われている

// const foo = wrapToReturnPromise(function* () {
//     try {
//         var val = yield getMeAPromise();
//         console.log(val);
//     }
//     catch(err) {
//         console.log('Error: ', err.message);
//     }
// });

// function delay(milliseconds: number, count: number): Promise<number> {
//   return new Promise<number>((resolve) => {
//     setTimeout(() => {
//       resolve(count);
//     }, milliseconds);
//   });
// }

// // async関数は常にPromiseを返します
// async function dramaticWelcome(): Promise<void> {
//   console.log("Hello");

//   for (let i = 0; i < 5; i++) {
//     // awaitは、Promise<number>をnumberに変換します
//     const count: number = await delay(500, i);
//     console.log(count);
//   }
//   await delay(500, 1);
//   console.log("World!");
// }

// dramaticWelcome();

// enum AnimalFlags {
//     None           = 0,
//     HasClaws       = 1 << 0,
//     CanFly         = 1 << 1,
//     EatsFish       = 1 << 2,
//     Endangered     = 1 << 3
// }

// enum AnimalFlags {
//   None = 0,
//   HasClaws = 1 << 0,
//   CanFly = 1 << 1,
// }
// type Animal = {
//   flags: AnimalFlags;
// };

// function printAnimalAbilities(animal: Animal) {
//   var animalFlags = animal.flags;
//   if (animalFlags & AnimalFlags.HasClaws) {
//     console.log("animal has claws");
//   }
//   if (animalFlags & AnimalFlags.CanFly) {
//     console.log("animal can fly");
//   }
//   if (animalFlags == AnimalFlags.None) {
//     console.log("nothing");
//   }
// }
// console.log(AnimalFlags.None, "None"); // 0
// console.log(AnimalFlags.CanFly, "CanFly"); // 2

// let animal: Animal = { flags: AnimalFlags.None };
// printAnimalAbilities(animal); // nothing
// animal.flags |= AnimalFlags.HasClaws;
// printAnimalAbilities(animal); // animal has claws
// animal.flags &= ~AnimalFlags.HasClaws;
// printAnimalAbilities(animal); // nothing
// animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
// printAnimalAbilities(animal); // animal has claws, animal can fly

// // 文字列列挙型
// export enum EvidenceTypeEnum {
//   UNKNOWN = "",
//   PASSPORT_VISA = "passport_visa",
//   PASSPORT = "passport",
//   SIGHTED_STUDENT_CARD = "sighted_tertiary_edu_id",
//   SIGHTED_KEYPASS_CARD = "sighted_keypass_card",
//   SIGHTED_PROOF_OF_AGE_CARD = "sighted_proof_of_age_card",
// }

// // Where `someStringFromBackend` will be '' | 'passport_visa' | 'passport' ... etc.
// const value = someStringFromBackend as EvidenceTypeEnum;

// // Sample use in code
// if (value === EvidenceTypeEnum.PASSPORT) {
//   console.log("You provided a passport");
//   console.log(value); // `passport`
// }

// ---------------- 関数の型 ---------------------
// // variable annotation
// var sampleVariable: { bar: number };

// // function parameter annotation
// function foo(sampleParameter: { bar: number }) {}

// interface Foo {
//   foo: string;
// }

// // Return type annotated as `: Foo`
// function foo(sample: Foo): Foo {
//   return sample;
// }

// // オプションパラメータ
// function foo(bar: number, bas?: string): void {
//   // ..
// }

// foo(123);
// foo(123, "hello");

// パラメータが渡されない場合にデフォルト値を設定できる
// function foo(bar: number, bas: string = 'hello') {
//   console.log(bar, bas);
// }

// foo(123);           // 123, hello
// foo(123, 'world');  // 123, world

// オーバーロード
// function padding(a: number, b?: number, c?: number, d?: any) {
//   if (b === undefined && c === undefined && d === undefined) {
//     b = c = d = a;
//   } else if (c === undefined && d === undefined) {
//     c = a;
//     d = b;
//   }
//   return {
//     top: a,
//     right: b,
//     bottom: c,
//     left: d,
//   };
// }

// Overloads
// function padding(all: number);
// function padding(topAndBottom: number, leftAndRight: number);
// function padding(top: number, right: number, bottom: number, left: number);
// // Actual implementation that is a true representation of all the cases the function body needs to handle
// function padding(a: number, b?: number, c?: number, d?: number) {
//     if (b === undefined && c === undefined && d === undefined) {
//         b = c = d = a;
//     }
//     else if (c === undefined && d === undefined) {
//         c = a;
//         d = b;
//     }
//     return {
//         top: a,
//         right: b,
//         bottom: c,
//         left: d
//     };
// }

// type HasFoo = {
//   foo: number;
// };
// type HasBar = {
//   bar: string;
// };

// type ReturnFooAndBar = {
//   (arg1: number): HasFoo & HasBar;
//   (arg1: string, arg2: number): HasFoo & HasBar;
// };

// function returnFooAndBar(arg1: number): HasFoo & HasBar;
// function returnFooAndBar(arg1: string, arg2: number): HasFoo & HasBar;
// function returnFooAndBar(arg1: number | string, arg2?: number) {
//   return {};
// }

// const x: ReturnFooAndBar = returnFooAndBar; // ok

// const y = returnFooAndBar(1); // const y: HasFoo & HasBar
// y.foo; // (property) foo: number
// y.bar; // (property) bar: string

// // 実際には foo も bar も undefined
// console.log(y.foo, y.bar); // undefined undefined

// const returnFooAndBar: ReturnFooAndBar = (
//   arg1: number | string,
//   arg2?: number,
// ) => {
//   if (typeof arg1 === "number") {
//     return {
//       foo: arg1,
//       bar: "a",
//     };
//   } else if (typeof arg2 === "number") {
//     return {
//       foo: arg2,
//       bar: arg1,
//     };
//   }
//   // 以下のコードはどのようなケースでも実行されないが、これがないと TypeScript がエラーを出す
//   return {
//     foo: 1,
//     bar: arg1,
//   };
// };

// returnFooAndBar(9); //ok
// returnFooAndBar("z", 9); // ok
// returnFooAndBar(9, 8); // Argument of type '9' is not assignable to parameter of type 'string'.ts(2345)
// returnFooAndBar("z"); // Argument of type '"z"' is not assignable to parameter of type 'number'.ts(2345)

// -------------------呼び出し可能オブジェクト-------------------------------------

// interface ReturnString {
//   (): string;
// }

// declare const foo: ReturnString;
// const bar = foo(); // bar is inferred as a string

// interface Complex {
//   (foo: string, bar?: number, ...others: boolean[]): number;
// }

// interface Overloaded {
//   (foo: string): string;
//   (foo: number): number;
// }

// // example implementation
// function stringOrNumber(foo: number): number;
// function stringOrNumber(foo: string): string;
// function stringOrNumber(foo: any): any {
//   if (typeof foo === "number") {
//     return foo * foo;
//   } else if (typeof foo === "string") {
//     return `hello ${foo}`;
//   }
// }

// const overloaded: Overloaded = stringOrNumber;

// // example usage
// const str = overloaded(""); // type of `str` is inferred as `string`
// const num = overloaded(123); // type of `num` is inferred as `number`

// // アロー構文の場合はオーバーロードできない！！
// const simple: (foo: number) => string = (foo) => foo.toString();

// interface CallMeWithNewToGetString {
//   new (): string;
// }
// // Usage
// declare const Foo: CallMeWithNewToGetString;
// const bar = new Foo(); // bar is inferred to be of type string

// // ------------- Type Assertion ------------------------

// interface Foo {
//   bar: number;
//   bas: string;
// }
// var foo = {} as Foo;
// foo.bar = 123;
// foo.bas = "hello";

// // --------------- Freshness -------------------------------------------
// function logName(something: { name: string }) {
//   console.log(something.name);
// }

// var person = { name: "matt", job: "being awesome" };
// var animal = { name: "cow", diet: "vegan, but has milk of own species" };
// var random = { note: `I don't have a name property` };

// logName(person); // okay
// logName(animal); // okay
// logName(random); // Error: property `name` is missing

// logName({ name: "matt" }); // okay
// logName({ name: "matt", job: "being awesome" }); // Error: object literals must only specify known properties. `job` is excessive here.

// function logIfHasName(something: { name?: string }) {
//   if (something.name) {
//     console.log(something.name);
//   }
// }
// var person = { name: "matt", job: "being awesome" };
// var animal = { name: "cow", diet: "vegan, but has milk of own species" };

// logIfHasName(person); // okay
// logIfHasName(animal); // okay
// logIfHasName({ neme: "I just misspelled name to neme" }); // Error: object literals must only specify known properties. `neme` is excessive here.

// // ---------------- 型ガード -------------------------------
// function doSomething(x: number | string) {
//   if (typeof x === "string") {
//     // Within the block TypeScript knows that `x` must be a string
//     console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
//     console.log(x.substr(1)); // OK
//   }
//   x.substr(1); // Error: There is no guarantee that `x` is a `string`
// }

// class Foo {
//   foo = 123;
//   common = '123';
// }

// class Bar {
//   bar = 123;
//   common = '123';
// }

// function doStuff(arg: Foo | Bar) {
//   if (arg instanceof Foo) {
//       console.log(arg.foo); // OK
//       console.log(arg.bar); // Error!
//   }
//   if (arg instanceof Bar) {
//       console.log(arg.foo); // Error!
//       console.log(arg.bar); // OK
//   }

//   console.log(arg.common); // OK
//   console.log(arg.foo); // Error!
//   console.log(arg.bar); // Error!
// }

// doStuff(new Foo());
// doStuff(new Bar());

// // else内でも型推論が効く
// class Foo {
//   foo = 123;
// }

// class Bar {
//   bar = 123;
// }

// function doStuff(arg: Foo | Bar) {
//   if (arg instanceof Foo) {
//       console.log(arg.foo); // OK
//       console.log(arg.bar); // Error!
//   }
//   else {  // MUST BE Bar!
//       console.log(arg.foo); // Error!
//       console.log(arg.bar); // OK
//   }
// }

// doStuff(new Foo());
// doStuff(new Bar());

// interface A {
//   x: number;
// }
// interface B {
//   y: string;
// }

// function doStuff(q: A | B) {
//   if ("x" in q) {
//     // q: A
//   } else {
//     // q: B
//   }
// }

// type TriState = "yes" | "no" | "unknown";

// function logOutState(state: TriState) {
//   if (state == "yes") {
//     console.log("User selected yes");
//   } else if (state == "no") {
//     console.log("User selected no");
//   } else {
//     console.log("User has not made a selection yet");
//   }
// }

// type Foo = {
//   kind: "foo"; // Literal type
//   foo: number;
// };
// type Bar = {
//   kind: "bar"; // Literal type
//   bar: number;
// };

// function doStuff(arg: Foo | Bar) {
//   if (arg.kind === "foo") {
//     console.log(arg.foo); // OK
//     console.log(arg.bar); // Error!
//   } else {
//     // MUST BE Bar!
//     console.log(arg.foo); // Error!
//     console.log(arg.bar); // OK
//   }
// }

// function foo(a?: number | null) {
//   if (a == null) return;

//   // a is number now.
// }

// /**
//  * Just some interfaces
//  */
// interface Foo {
//   foo: number;
//   common: string;
// }

// interface Bar {
//   bar: number;
//   common: string;
// }

// /**
//  * User Defined Type Guard!
//  */
// function isFoo(arg: any): arg is Foo {
//   return arg.foo !== undefined;
// }

// /**
//  * Sample usage of the User Defined Type Guard
//  */
// function doStuff(arg: Foo | Bar) {
//   if (isFoo(arg)) {
//     console.log(arg.foo); // OK
//     console.log(arg.bar); // Error!
//   } else {
//     console.log(arg.foo); // Error!
//     console.log(arg.bar); // OK
//   }
// }

// doStuff({ foo: 123, common: "123" });
// doStuff({ bar: 123, common: "123" });

// // Example Setup
// declare var foo: { bar?: { baz: string } };
// function immediate(callback: () => void) {
//   callback();
// }

// // Type Guard
// if (foo.bar) {
//   console.log(foo.bar.baz); // Okay
//   functionDoingSomeStuff(() => {
//     console.log(foo.bar.baz); // TS error: Object is possibly 'undefined'"
//   });
// }

// // Type Guard
// if (foo.bar) {
//   console.log(foo.bar.baz); // Okay
//   const bar = foo.bar;
//   functionDoingSomeStuff(() => {
//     console.log(bar.baz); // Okay
//   });
// }

// ---------------------- リテラル型 ------------------------------------
// let foo: "Hello";
// foo = "Bar"; // Error: "Bar" is not assignable to type "Hello"

// type CardinalDirection = "North" | "East" | "South" | "West";

// function move(distance: number, direction: CardinalDirection) {
//   // ...
// }

// move(1, "North"); // Okay
// move(1, "Nurth"); // Error!

// type OneToFive = 1 | 2 | 3 | 4 | 5;
// type Bools = true | false;

// function iTakeFoo(foo: "foo") {}
// const test = {
//   someProp: "foo",
// };
// iTakeFoo(test.someProp); // Error: Argument of type string is not assignable to parameter of type 'foo'

// function iTakeFoo(foo: "foo") {}
// const test = {
//   someProp: "foo" as "foo",
// };
// iTakeFoo(test.someProp); // Okay!

// function iTakeFoo(foo: "foo") {}
// type Test = {
//   someProp: "foo";
// };
// const test: Test = {
//   // Annotate - inferred someProp is always === 'foo'
//   someProp: "foo",
// };
// iTakeFoo(test.someProp); // Okay!

// /** Utility function to create a K:V from a list of strings */
// function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
//   return o.reduce((res, key) => {
//     res[key] = key;
//     return res;
//   }, Object.create(null));
// }

/**
 * Sample create a string enum
 */

// /** Create a K:V */
// const Direction = strEnum(["North", "South", "East", "West"]);
// /** Create a Type */
// type Direction = keyof typeof Direction;

// /**
//  * Sample using a string enum
//  */
// let sample: Direction;

// sample = Direction.North; // Okay
// sample = "North"; // Okay
// sample = "AnythingElse"; // ERROR!

// -------------------- Readonly -------------------------------

// function foo(config: { readonly bar: number; readonly bas: number }) {
//   // ..
// }

// let config = { bar: 123, bas: 123 };
// foo(config);
// // You can be sure that `config` isn't changed 🌹

// type Foo = {
//   readonly bar: number;
//   readonly bas: number;
// };

// // Initialization is okay
// let foo: Foo = { bar: 123, bas: 456 };

// // Mutation is not
// foo.bar = 456; // Error: Left-hand side of assignment expression cannot be a constant or a read-only property

// class Foo {
//   readonly bar = 1; // OK
//   readonly baz: string;
//   constructor() {
//     this.baz = "hello"; // OK
//   }
// }

// type Foo = {
//   bar: number;
//   bas: number;
// };

// type FooReadonly = Readonly<Foo>;

// let foo: Foo = { bar: 123, bas: 456 };
// let fooReadonly: FooReadonly = { bar: 123, bas: 456 };

// foo.bar = 456; // Okay
// fooReadonly.bar = 456; // ERROR: bar is readonly

// /**
//  * Declaration
//  */
// interface Foo {
//   readonly [x: number]: number;
// }

// /**
//  * Usage
//  */
// let foo: Foo = { 0: 123, 2: 345 };
// console.log(foo[0]); // Okay (reading)
// foo[0] = 456; // Error (mutating): Readonly

// let foo: ReadonlyArray<number> = [1, 2, 3];
// console.log(foo[0]); // Okay
// foo.push(4); // Error: `push` does not exist on ReadonlyArray as it mutates the array
// foo = foo.concat([4]); // Okay: create a copy

// const foo = 123; // variable reference
// var bar: {
//   readonly bar: number; // for property
// };

// let foo: {
//   readonly bar: number;
// } = {
//   bar: 123,
// };

// function iMutateFoo(foo: { bar: number }) {
//   foo.bar = 456;
// }

// iMutateFoo(foo); // The foo argument is aliased by the foo parameter
// console.log(foo.bar); // 456!

// interface Foo {
//   readonly bar: number;
// }
// let foo: Foo = {
//   bar: 123,
// };

// function iTakeFoo(foo: Foo) {
//   foo.bar = 456; // Error! bar is readonly
// }

// iTakeFoo(foo); // The foo argument is aliased by the foo parameter

// ----------------- ジェネリック型 --------------------------
// class Queue {
//   private data = [];
//   push(item) {
//     this.data.push(item);
//   }
//   pop() {
//     return this.data.shift();
//   }
// }

// // うまくいかない例
// class Queue {
//   private data = [];
//   push(item) {
//     this.data.push(item);
//   }
//   pop() {
//     return this.data.shift();
//   }
// }

// const queue = new Queue();
// queue.push(0);
// queue.push("1"); // Oops a mistake

// // a developer walks into a bar
// console.log(queue.pop().toPrecision(1));
// console.log(queue.pop().toPrecision(1)); // RUNTIME ERROR

/** A class definition with a generic parameter */
// class Queue<T> {
//   private data: T[] = [];
//   push(item: T) {
//     this.data.push(item);
//   }
//   pop(): T | undefined {
//     return this.data.shift();
//   }
// }

// /** Again sample usage */
// const queue = new Queue<number>();
// queue.push(0);
// queue.push("1"); // ERROR : cannot push a string. Only numbers allowed

// // ^ if that error is fixed the rest would be fine too

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

// class Utility {
//   constructor(public test = "test") {}
//   reverse<T>(items: T[]): T[] {
//     var toreturn = [];
//     for (let i = items.length - 1; i >= 0; i--) {
//       toreturn.push(items[i]);
//     }
//     return toreturn;
//   }
// }

// const getJSON = <T>(config: {
//   url: string;
//   headers?: { [key: string]: string };
// }): Promise<T> => {
//   const fetchConfig = {
//     method: "GET",
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     ...(config.headers || {}),
//   };
//   return fetch(config.url, fetchConfig).then<T>((response) => response.json());
// };

// type LoadUsersResponse = {
//   users: {
//     name: string;
//     email: string;
//   }[]; // array of user objects
// };
// function loadUsers() {
//   return getJSON<LoadUsersResponse>({ url: "https://example.com/users" });
// }

// declare function send<T>(arg: T): void;

// send<{ y: string }>({
//   y: "123",
//   // Also you get autocomplete
// }); // Will TSError if `x:123` does not match the structure expected for Something
