
const getMaxDigit = (number) => {
    let arrOfNumbers = number.toString().split('').map(Number);
    return Math.max(...arrOfNumbers);
}
console.log(getMaxDigit(25690083));

/*2. Створити функцію, яка визначає ступінь числа. Не
використовуючи Math.pow та **. Використовуйте цикл*/
const pow = (base, exponent) => {
    if (exponent === 0) return 1;
    if (exponent === 1) return base;
    let number = base;

    for (let i = 1; i < exponent; i++) {
        number = number * base;
    }
    return number;
}
console.log('pow', pow(5, 5));

// 3. Створити функцію, яка форматує ім'я, роблячи першу букву
// великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

const formatName = (name) => {
    const firstLetter = name.substring(0, 1).toLowerCase();
    return name.toLowerCase().replace(firstLetter, (subStr) => subStr.toUpperCase());
}
console.log(formatName('мИКОлай'));

// 4. Створити функцію, яка вираховує суму, що залишається після
// оплати податку від зарабітньої плати. (Податок = 18% + 1.5% ->
// 19.5%). Приклад: 1000 -> 805

const salary = (salary, tax) => {
    return salary - salary * tax / 100;
}
console.log(salary(1000, 19.5));

// 5. Створити функцію, яка повертає випадкове ціле число в
// діапазоні від N до M.
//     Приклад: getRandomNumber(1, 10) -> 5

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomNumber(1, 20));

// 6. Створити функцію, яка рахує скільки разів певна буква
// повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4

const countLetter = (letter, word) => {
    return word.toLowerCase().split('').filter(el => el.includes(letter.toLowerCase())).length;
}
console.log(countLetter("А", "Асталавіста"));

// 7. Створіть функцію, яка конвертує долари в гривні та навпаки в
// залежності від наявності символа $ або UAH в рядку.
//     Приклад: convertCurrency("100$") -> 2500 грн. або
// convertCurrency("2500UAH") -> 100$
/*8. Врахуйте, інші валюти не конвертуються, потрібно виводити
помилку, і також регістр uah не має значення.*/

const convertCurrency = (money) => {
    const currency = money.match(/UAH|\$/ig) ? money.match(/UAH|\$/ig)[0] : '';
    if (!currency) return 'Введіть коректну валюту';

    if (currency === '$') return (money.slice(0, -1) * 37).toFixed(2) + 'грн.';
    if (currency === 'UAH' || 'uah') return (money.slice(0, -3) / 37).toFixed(2) + '$';
}
console.log(convertCurrency("3700uah"));

/*9. Створіть функцію генерації випадкового паролю (тільки числа),
довжина встановлюється користувачем або по замовчуванню = 8 символам.
    Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124*/

const getRandomPassword = (length = 8) => {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += Math.floor(Math.random() * 9);
    }
    return password;
}
console.log(getRandomPassword());

// 10. Створіть функцію, яка видаляє всі букви з речення.
//     Приклад: deleteLetters('a', "blablabla") -> "blblbl"

const deleteLetters = (letter, statement) => {
    const re = new RegExp(letter, 'ig');
    return statement.replace(re, '');
}
console.log(deleteLetters('b', "blablabla"));

/*11. Створіть функцію, яка перевіряє, чи є слово паліндромом.
    Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false,
    isPalyndrom("Я несу гусеня") -> true*/

const isPalyndrom = (str) => {
    const strVar = str.replace(/\s/g, '').toLowerCase();
    const len = strVar.length;

    for (let i = 0; i < len/2; i++) {
        if (strVar[i] !== strVar[len-1-i]) return false;
    }
    return true;
}
console.log(isPalyndrom("Я несу гусеня"));

/*12. Створіть функцію, яка видалить з речення букви, які
зустрічаються більше 1 разу.
    Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") ->
"сктдеим"*/

const deleteDuplicateLetter = (str) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let re = new RegExp(str[i], 'ig');
        if (str.match(re).length === 1) {
            result += str[i];
        }
    }
    return result;
}
console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"));


document.writeln(`
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
`);
