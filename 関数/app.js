function testFunc() {
    console.log("test!!!");
}

// アロー関数
const add = (x, y) => {
    return x + y;
};

// filterメソッド
function validUserNames(stringData) {
    return stringData.filter((data) => {
        return data.length < 10;
    });
}

const x = ["22", "4444", "xxxxxxxxxx"];

// allEvensという関数を作りましょう
function allEvens(inputArray) {
    return inputArray.every((even) => {
        return even % 2 === 0;
    });
}

const z = [1, 2, 3, 4];
const y = [2, 4, 6, 8];

// reduceメソッド
const prices = [980, 1500, 1980, 4980, 2980];

let totalResult = prices.reduce((total, price) => {
    return total + price;
})