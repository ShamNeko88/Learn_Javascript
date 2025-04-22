// 操作種別の選択
let operationType = prompt("Enter 'add' or 'delete' or 'list' or 'quit'");

// todoデータ用配列宣言
const todoData = [];

// **************************
// quit が入力されるまで繰り返されるのTOPレベルループ
// **************************
while (operationType !== "quit") {
    console.clear();
    // **************************
    // 指定の操作以外は拒否する
    // **************************
    if (
        operationType !== "add" &&
        operationType !== "delete" &&
        operationType !== "list"
    ) {
        console.log(`不明な操作が入力されました：${operationType}`);
        // 次の操作を選択してもらう
        operationType = prompt(
            "Please enter 'add' or 'delete' or 'list' or 'quit'."
        );
        continue;
    }

    // **************************
    // コンソールに操作種別の出力
    // **************************
    console.log("=======================");
    console.log(`操作種別：${operationType}`);

    // **************************
    // 操作種別毎に処理を分ける
    // **************************
    // 新規todoの追加処理
    if (operationType === "add") {
        todoData.push(prompt("Please enter a TODO."));
    }
    // 新規todoの削除処理
    else if (operationType === "delete") {
        let number = parseInt(prompt("Please enter the number to be deleted"));
        todoData.splice(number - 1, 1);
    }

    // **************************
    // todoの一覧表示処理
    // **************************
    console.log("↓現在の TODO 一覧↓");
    for (let todoNumber = 1; todoNumber <= todoData.length; todoNumber++) {
        console.log(`${todoNumber}: ${todoData[todoNumber - 1]}`);
    }

    // 次の操作を選択してもらう
    operationType = prompt(
        "Please enter 'add' or 'delete' or 'list' or 'quit'"
    );
    console.clear();
}
