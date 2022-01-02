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
