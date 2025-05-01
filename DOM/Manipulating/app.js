// アンカー要素全て取得
const allLinks = document.querySelectorAll("a");

// 全てのリンクのテキストを変更
for (let link of allLinks) {
    link.textContent = "私はリンクです！！！！";
}
