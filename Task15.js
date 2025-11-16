let num = 20;

function printTables(num) {
    for (let i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
    }
};

printTables(num);
console.log(printTables(num));