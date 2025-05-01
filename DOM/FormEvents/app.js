const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", function (e) {
    e.preventDefault(); // デフォルトのsubmitイベントをキャンセル

    // フォームの値を取得する
    const usernameInput = tweetForm.elements.username.value;
    const tweetInput = tweetForm.elements.tweet.value;

    // ツイートを作成する関数を呼び出す
    addTweet(usernameInput, tweetInput);

    // 入力項目をリセット
    tweetForm.elements.username.value = "";
    tweetForm.elements.tweet.value = "";
});

// ツイートを作成する
const addTweet = (username, tweet) => {
    // li要素を作成
    const newTweet = document.createElement("li");
    // b要素を作成
    const bTag = document.createElement("b");
    // b要素にユーザー名を追加
    bTag.append(username);
    // li要素にb要素を追加
    newTweet.append(bTag);
    // li要素にtweetを追加
    newTweet.append(`: ${tweet}`);
    // tweetsContainerにli要素を追加
    tweetsContainer.append(newTweet);
};
