/*
// container要素の取得
const container = document.querySelector("#container");
// 画像要素の作成
const newImg = document.createElement("img");
// 画像のsrc属性を設定
newImg.src =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
// 画像の表示
container.appendChild(newImg);
*/
// 画像URL
const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; // 1.png
// 151匹のポケモンを表示する
for (let i = 1; i <= 151; i++) {
    // 必要な要素を作成
    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");  // div要素にクラスを追加
    const label = document.createElement("span");
    label.innerText = `#${i}`;  // ラベルのテキストを設定
    const newImg = document.createElement("img");
    // 画像のsrc属性を設定
    newImg.src = `${baseUrl}${i}.png`;
    // div要素にimg追加
    pokemon.appendChild(newImg);
    // div要素にlabel追加
    pokemon.appendChild(label);
    // container要素にpokemon追加
    container.appendChild(pokemon);
}
