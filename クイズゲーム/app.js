console.log("ゲーム開始");
let maximum = parseInt(prompt("数字を入力してください"));

// 数字入力チェック
while (!maximum) {
    maximum = parseInt(prompt(`数字を入力してください！！！`));
}

// 正解の数字を生成
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

// 試行回数
let count = 1;

// 当ててもらう
let guess = parseInt(prompt("正解の数字を決めました。当ててください！"));
while (guess !== targetNum) {
    if (guess > targetNum) {
        guess = parseInt(prompt("入力された数字より小さいです！"));
        count ++;
    } else if (guess < targetNum) {
        guess = parseInt(prompt("入力された数字より大きいです！"));
        count ++;
    }
}
prompt(`${targetNum}  ${count}回目で正解です！！！`);
console.log("正解")
