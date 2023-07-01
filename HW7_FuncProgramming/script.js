const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/*1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує
скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
викликатись через call та працювати з даними через this*/

function getMyTaxes(salary) {
    return (this.tax * salary).toFixed(2);
}

const salary = +prompt('Введіть розмір заробітної плати');

console.log(`Функція 1 - getMyTaxes\n\n сумма податків в Україні - `, getMyTaxes.call(ukraine, salary));
console.log(`\n сумма податків в Латвії - `, getMyTaxes.call(latvia, salary));
console.log(`\n сумма податків у Литві - `, getMyTaxes.call(litva, salary));

/* 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує
скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax *
    middleSalary). Функція повинна викликатись через call та працювати з даними
через this*/

function getMiddleTaxes() {
    return (this.tax * this.middleSalary).toFixed(2);
}

console.log(`\nФункція 2 - getMiddleTaxes\n\n сумма податків у середньому в Україні - `, getMiddleTaxes.call(ukraine));
console.log(`\n сумма податків у середньому в Латвії - `, getMiddleTaxes.call(latvia));
console.log(`\n сумма податків у середньому в Литві - `, getMiddleTaxes.call(litva));

/* 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки
всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary *
    vacancies). Функція повинна викликатись через call та працювати з даними
через this*/

function getTotalTaxes() {
    return (this.tax * this.middleSalary * this.vacancies).toFixed(2);
}

console.log(`\nФункція 3 - getTotalTaxes\n\n сумма податків у середньому в Україні - `, getTotalTaxes.call(ukraine));
console.log(`\n сумма податків у середньому в Латвії - `, getTotalTaxes.call(latvia));
console.log(`\n сумма податків у середньому в Литві - `, getTotalTaxes.call(litva));

/* 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт
виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
    Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes –
розраховується в залежності від вибраної країни та значення salary.
    profit = salary - taxes;
для виводу в консоль кожні 10 секунд використайте setInterval*/

function getMySalary(country) {
    switch (country) {
        case 'ukraine':
            country = ukraine;
        break;
        case 'latvia':
            country = latvia;
            break;
        case 'litva':
            country = litva;
            break;
        default:
            console.log('\n\nВи не вірно ввели назву країни');
            return;
    }

    setInterval(function() {
        const salary = getRandomSalary();
        const taxes = getMyTaxes.call(country, salary);

        console.log({
            salary: salary,
            taxes: taxes,
            profit: salary - taxes
        })
    }, 10000);
}

function getRandomSalary() {
    return Math.floor(Math.random() * (2000 - 1500) + 1500);
}

let country = prompt('Введіть країну з обраних: ukraine, latvia, litva');
getMySalary(country);
console.log(`Функція 4 - getMySalary\n\nпо країні ${country}`);