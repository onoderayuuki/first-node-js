'use strict'
const number = process.argv[2] || 0;
/*process.argv  Node.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列
    process.argv[0] node コマンドのファイルのパス
    process.argv[1] 実行しているプログラムのファイルのパスが入る
    process.argv[2] コマンドの後ろに書かれた最初の引数
　XXX || 0    前者が0 や null や undefined などの Falsy な値である場合、number には 0 が代入。
*/
let sum = 0;
for (let i = 1; i < number; i++) {
    sum = sum + i;
    
}
console.log(sum);