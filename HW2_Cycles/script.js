
let n = Number(prompt('Введіть ціле число', '0'));

while(!Number.isInteger(n)) {
    n = Number(prompt('Число не є цілим', '0'));
}

let m = Number(prompt('Введіть друге ціле і більше за попереднє число', '0'));

while(!Number.isInteger(m) || m < n) {
    m = Number(prompt('Введіть ціле число і більше за попереднє', '0'));
}

const skipEven = confirm('Пропускати парні числа?');

let result = 0;

if (skipEven) {
    let k;
    if (n % 2 === 0) k = n + 1;
    for (let i = k || n; i <= m ; i = i + 2) {
        result += i;
    }
} else {
    for (let i = n; i <= m ; i++) {
        result += i;
    }
}

document.writeln(`N = ${n}<br>
M = ${m}<br>
пропускати парні = ${skipEven ? 'так' : 'ні'}<br>
сума чисел = ${result}`);

console.log('n ', n);
console.log('m ', m);
console.log('skipEven ', skipEven);
console.log('result ', result);
