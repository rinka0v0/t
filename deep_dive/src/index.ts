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

//...
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

//...
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

// テンプレートリテラル
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

// Promise

import fs = require("fs");

function loadJSONSync(filename: string) {
  return JSON.parse(fs.readFileSync(filename));
}

// 正しいjsonファイル
console.log(loadJSONSync("good.json"));

// 存在しないファイル: fs.readFileSync が失敗する
try {
  console.log(loadJSONSync("absent.json"));
} catch (err) {
  // errの型推論はunknownとなる
  console.log("absent.json error", err.message);
}

// 正しくないjsonファイル 例: ファイルは存在するが、JSON.parseが失敗する
try {
  console.log(loadJSONSync("invalid.json"));
} catch (err) {
  console.log("invalid.json error", err.message);
}

import fs = require("fs");

// 最初に思いつくであろう試みですが、正しくありません.
function loadJSON(filename: string, cb: (error: Error, data: any) => void) {
  fs.readFile(filename, function (err, data) {
    if (err) cb(err);
    else cb(null, JSON.parse(data));
  });
}

loadJSON("invalid.json", function (err, data) {
  // JSON.parseがErrorをthrowされるため、このコードは永久に実行されない
  if (err) console.log("bad.json error", err.message);
  else console.log(data);
});

// 修正してみる
import fs = require("fs");

// より改善したバージョンです。しかし、まだ正しくありません。
// cbが2回呼び出される可能性がある!!

function loadJSON(filename: string, cb: (error: Error) => void) {
  fs.readFile(filename, function (err, data) {
    if (err) {
      cb(err);
    } else {
      try {
        cb(null, JSON.parse(data));
      } catch (err) {
        cb(err);
      }
    }
  });
}

// 正しくないJSONファイルのロード
loadJSON("invalid.json", function (err, data) {
  if (err) console.log("bad.json error", err.message);
  else console.log(data);
});

// 完全に機能するバージョン
import fs = require('fs');

function loadJSON(filename: string, cb: (error: Error) => void) {
    fs.readFile(filename, function (err, data) {
        if (err) return cb(err);
        // すべての同期処理コードをtry catchブロックに含める
        try {
            var parsed = JSON.parse(data);
        }
        catch (err) {
            return cb(err);
        }
        // コールバックを呼び出す時を除く
        return cb(null, parsed);
    });
}