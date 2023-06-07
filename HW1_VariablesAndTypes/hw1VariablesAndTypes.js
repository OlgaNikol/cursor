
const bread = 15.678;
const chocolate = 123.965;
const ice = 90.2345;

const maxPrice = Math.max(bread, chocolate, ice);
console.log('max price ', maxPrice);

const minPrice = Math.min(bread, chocolate, ice);
console.log('min price ', minPrice);

const sum = bread + chocolate + ice;
console.log('sum ', sum);

const sumOfIntegers = Math.floor(bread) + Math.floor(chocolate) + Math.floor(ice);
console.log('sum of integers ', sumOfIntegers);

const roundedSumToHundreds = Math.round(sum / 100) * 100;
console.log('roundedSumToHundreds ', roundedSumToHundreds);

const evenSum = Math.floor(sum) % 2 === 0;
console.log('even sum ', evenSum);

const change = 500 - sum;
console.log('change ', change);

const averagePrice = (sum / 3).toFixed(1);
console.log('averagePrice ', averagePrice);

const discount = Math.floor((80 - 10) * Math.random() + 10) / 100; //possible discount from 10 to 80 %
console.log('discount ', discount);
const discountedPrice = (sum - sum * discount).toFixed(2);
console.log('discounted price ', discountedPrice);
const netProfit = Math.floor(sum / 2 - sum * discount);
console.log('net profit ', netProfit);

const result = `Максимальна ціна: ${maxPrice} <br>
Мінімальна ціна: ${minPrice} <br>
Вартість всіх товарів: ${sum} <br>
Вартість всіх товарів без копійок: ${sumOfIntegers} <br>
Сума товарів округлена до сотень: ${roundedSumToHundreds} <br>
Чи є сума парним числом: ${evenSum} <br>
Решта: ${change} <br>
Середнє значення цін: ${averagePrice} <br>
Знижка: ${discount * 100} % <br>
Ціна зі знижкою: ${discountedPrice} <br>
Чистий прибуток: ${netProfit}`;

console.log(result);

document.getElementById("result").innerHTML = result;