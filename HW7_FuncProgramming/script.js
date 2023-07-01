const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/*1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує
скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
викликатись через call та працювати з даними через this*/

function getMyTaxes(salary) {
    return this.tax * salary;
}

//const country = prompt('Введіть одну із зазначених країн: ukraine, latvia, litva');
// const countryArg = country === 'ukraine' ? ukraine : country === 'latvia' ? latvia : country === 'litva' ? litva :
//     prompt('Ви не вірно ввели назву країни, виберіть із зазначених країн: ukraine, latvia, litva');

let country = prompt('Введіть одну із зазначених країн: ukraine, latvia, litva');
debugger;
top:
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
        debugger;
        prompt('Ви не вірно ввели назву країни, виберіть із зазначених країн: ukraine, latvia, litva');
        break top;
}


const salary = +prompt('Введіть розмір заробітної плати');

//console.log(`Функція 1 - getMyTaxes\n сумма податків - `, getMyTaxes.call(countryArg, salary));