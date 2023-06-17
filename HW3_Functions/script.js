/*1. Створити функцію getMaxDigit(number) – яка отримує будь-яке
число та виводить найбільшу цифру в цьому числі.*/
const getMaxDigit = (number = prompt('Функція 1. Введіть число')) => {
    const arrOfNumbers = number.split('').map(Number);
    return Math.max(...arrOfNumbers);
}

/*2. Створити функцію, яка визначає ступінь числа. Не
використовуючи Math.pow та **. Використовуйте цикл*/
const pow = (base = prompt('Функція 2. Введіть число для визначення ступеня числа'),
             exponent= prompt('Функція 2. Введіть ступінь числа')) => {
    base = +base;
    exponent = +exponent;
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    let number = base;

    for (let i = 1; i < exponent; i++) {
        number = number * base;
    }
    return number;
}

// 3. Створити функцію, яка форматує ім'я, роблячи першу букву
// великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

const formatName = (name = prompt("Функція 3. Введіть ім'я")) => {
    const firstLetter = name.substring(0, 1).toLowerCase();
    return name.toLowerCase().replace(firstLetter, (subStr) => subStr.toUpperCase());
}

// 4. Створити функцію, яка вираховує суму, що залишається після
// оплати податку від зарабітньої плати. (Податок = 18% + 1.5% ->
// 19.5%). Приклад: 1000 -> 805

const salary = (salary = prompt('Функція 4. Введіть сумму зарплатні'), tax = prompt('Функція 4. Введіть сумму податку')) => {
    return +salary - +salary * +tax / 100;
}

// 5. Створити функцію, яка повертає випадкове ціле число в
// діапазоні від N до M.
//     Приклад: getRandomNumber(1, 10) -> 5

const getRandomNumber = (min = prompt (`Функція 5. Введіть початок діапазону`), max= prompt (`Функція 5. Введіть кінець діапазону`)) => {
    min = +min;
    max = +max;
    return Math.floor(Math.random() * (max - min) + min);
}

// 6. Створити функцію, яка рахує скільки разів певна буква
// повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4

const countLetter = (letter = prompt('Функція 6. Введіть літеру'), word = prompt('Функція 6. Введіть слово')) => {
    return word.toLowerCase().split('').filter(el => el.includes(letter.toLowerCase())).length;
}

// 7. Створіть функцію, яка конвертує долари в гривні та навпаки в
// залежності від наявності символа $ або UAH в рядку.
//     Приклад: convertCurrency("100$") -> 2500 грн. або
// convertCurrency("2500UAH") -> 100$
/*8. Врахуйте, інші валюти не конвертуються, потрібно виводити
помилку, і також регістр uah не має значення.*/

const convertCurrency = (money= prompt (`Функція 7. Вкажіть суму зі знаком валюти $ або UAH`)) => {
    const currency = money.match(/UAH|\$/ig) ? money.match(/UAH|\$/ig)[0] : '';
    if (!currency) return 'Введіть коректну валюту';

    if (currency === '$') return Math.round(money.slice(0, -1) * 37) + 'грн.';
    if (currency === 'UAH' || 'uah') return Math.round(money.slice(0, -3) / 37) + '$';
}

/*9. Створіть функцію генерації випадкового паролю (тільки числа),
довжина встановлюється користувачем або по замовчуванню = 8 символам.
    Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124*/

const getRandomPassword = (length = prompt (`Функція 9. Введіть кількість символів для генерації паролю`, '8')) => {
    let password = '';
    for (let i = 0; i < +length; i++) {
        password += Math.floor(Math.random() * 9);
    }
    return password;
}

// 10. Створіть функцію, яка видаляє всі букви з речення.
//     Приклад: deleteLetters('a', "blablabla") -> "blblbl"

const deleteLetters = (letter = prompt('Функція 10. Введіть літеру'), statement = prompt('Функція 10. Введіть речення')) => {
    const re = new RegExp(letter, 'ig');
    return statement.replace(re, '');
}

/*11. Створіть функцію, яка перевіряє, чи є слово паліндромом.
    Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false,
    isPalyndrom("Я несу гусеня") -> true*/

const isPalyndrom = (str = prompt('Функція 11. Введіть слово або речення')) => {
    const strVar = str.replace(/\s/g, '').toLowerCase();
    const len = strVar.length;

    for (let i = 0; i < len/2; i++) {
        if (strVar[i] !== strVar[len-1-i]) return false;
    }
    return true;
}

/*12. Створіть функцію, яка видалить з речення букви, які
зустрічаються більше 1 разу.
    Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") ->
"сктдеим"*/

const deleteDuplicateLetter = (str = prompt('Функція 12. Введіть речення для видалення букв які зустрічаються більше одного разу')) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let re = new RegExp(str[i], 'ig');
        if (str.match(re).length === 1) {
            result += str[i];
        }
    }
    return result;
}

document.writeln(`
    Функція #1: ${getMaxDigit()}<br>
    Функція #2: ${pow()}<br>
    Функція #3: ${formatName()}<br>
    Функція #4: ${salary()}<br>
    Функція #5: ${getRandomNumber()}<br>
    Функція #6: ${countLetter()}<br>
    Функція #7-8: ${convertCurrency()}<br>
    Функція #9: ${getRandomPassword()}<br>
    Функція #10: ${deleteLetters()}<br>
    Функція #11: ${isPalyndrom()}<br>
    Функція #12: ${deleteDuplicateLetter()}<br>
`);

/*document.writeln(`
    Функція #1: ${getMaxDigit(25690083)}<br>
    Функція #2: ${pow(5, 5)}<br>
    Функція #3: ${formatName('мИКОлай')}<br>
    Функція #4: ${salary(1000, 19.5)}<br>
    Функція #5: ${getRandomNumber(1, 20)}<br>
    Функція #6: ${countLetter("А", "Асталавіста")}<br>
    Функція #7-8: ${convertCurrency("3700uah")}<br>
    Функція #9: ${getRandomPassword()}<br>
    Функція #10: ${deleteLetters('b', "blablabla")}<br>
    Функція #11: ${isPalyndrom("Я несу гусеня")}<br>
    Функція #12: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}<br>
`);*/
