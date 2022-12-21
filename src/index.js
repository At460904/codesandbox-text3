/**
 * const、let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

let val2 = "let変数";
console.log(val2);

// letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";

// const
const val3 = "const変数";
console.log(val3);

// const変数は上書き、再宣言不可

// constで

// constで定義したオブジェクトはプロパティの変更が可能

// const val4 = {
//   name: "じゃけえ",
//   age: 28,
// };
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

//Reactの中では変数は基本const

/**
 * テンプレート文字列
 */
const name = "じゃけえ";
const age = 28;
// 「私の名前はじゃけえです。年齢は28歳です。」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
//  function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です。"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です。"));

/**
 * ブラケット（{}）省略して  const func2 = (str) => str と書いても良い
 */

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/**
 *  分割代入
 */

// const myProfile = {
//   name2: "じゃけぇ",
//   age2: "29",
// };
// // const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// // console.log(message3);

// const { name2, age2 } = myProfile;
// const message3 = `名前は${name2}です。年齢は${age2}です`;
// console.log(message3);

const myProfile = ["じゃけぇ", 30];
const message4 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message4);

// 配列の分割代入
const [name3, age3] = myProfile;
const message5 = `名前は${name3}です。年齢は${age3}歳です。`;
console.log(message5);

/**
 *  デフォルト値  　　＝"ゲスト"の部分がデフォルト値
 */
const sayHello = (name4 = "ゲスト") => console.log(`こんにちは！${name4}さん!`);
sayHello("じゃけぇ");

/**
 * スプレッド構文...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// スプレッド構文でコピーした場合はコピー元の要素[10, 20]は影響受けない
const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// 下記のコピーだとコピー元の要素[10, 20]も書き変わってしまう
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4)

/**
 *  mapやfilterを使った配列の処理
 */

// 従来の方法
const nameArr = ["田中", "山田", "じゃけぇ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

nameArr.map((name) => console.log(name));
