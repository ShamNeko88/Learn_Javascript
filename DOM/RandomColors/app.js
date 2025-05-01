const btn = document.querySelector("button");

const h1 = document.querySelector("h1");

btn.addEventListener("click", ()=> {
    document.body.style.backgroundColor = makeRandomColor();
    h1.innerText = makeRandomColor();
});

// ランダムな色を生成する関数
const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}