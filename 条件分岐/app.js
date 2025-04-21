// console.log("条件分岐の前");

// let random = Math.random();
// if (random < 0.5){
//     console.log("数字は0.5より小さい！");
//     console.log(random);
// }

// const dayOfWeek = prompt("英語で曜日を入力してください");

// if (dayOfWeek === "Monday") {
//     console.log("月曜日は憂鬱");
// } else if (dayOfWeek === "Saturday") {
//     console.log("土曜日は最高");
// } else {
//     console.log("火曜日～金曜日 or 日曜日")
// }

const password = prompt("パスワードを入力してください");

// パスワードは6文字以上の評価
if (password.length >= 6) {
    // 空白を含めるなの評価
    if (password.indexOf(" ") === -1) {
        console.log("OK：パスワードに空白がありません");
    } else {
        console.log("NO：パスワードに空白があります");
    }
} else {
    console.log("パスワードが短すぎます");
}
