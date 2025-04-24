/* =================================================
// for of構文
const seatingChart = [
    ["mori", "saito", "suzuki", "kanazawa"],
    ["xxx", "zzz"]
];

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}
================================================= */

/* =================================================
const testObject = {
    mori: 20,
    takahashi: 30,
    saito: 50,
    takayanagi: 35
}

// object型をfor ofで扱う
for (let name of Object.values(testObject)) {
    console.log(name)
}

// for in
for (let name in testObject) {
    console.log(name)
}
================================================= */

