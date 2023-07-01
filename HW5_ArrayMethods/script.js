/* 1.Створіть функцію getRandomArray(length, min, max) – яка
повертає масив випадкових цілих чисел. У функції є параметри: length -
довжина масиву, min – мінімальне значення цілого числа, max – максимальне
значення цілого числа.
    Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3,2]*/

const getRandomArray = (length, min, max) => {
    console.log('length = ', length);
    console.log('min = ', min);
    console.log('max = ', max);

    let resultArr = [];

    for (let i = 0; i < length; i++) {
        resultArr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return resultArr;
}

console.log(`Функція 1 - getRandomArray - повертає масив випадкових цілих чисел\n результат - `, getRandomArray(10, 1, 10)
);

/*2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих
в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getModa(6, 2, 55, 11, 11, 2, 55, 77, 57, 55, 55, 87, 23, 2, 56, 3, 2) –> 2*/

const getModa = (...numbers) => {
    let moda = [];
    let arrPastedItems = [];
    let maxLength = 0;

    numbers = numbers.filter(Number.isInteger);

    numbers.forEach((item, i, arr) => {
        let count = 0;
        let idx = arr.indexOf(item);
        while (idx !== -1) {
            count++;
            idx = arr.indexOf(item, idx + 1);
        }
        arrPastedItems.push({
            number: item,
            count: count
        })
    })

    maxLength = arrPastedItems.reduce((previous, current) => {
        return (previous < current.count ? current.count : previous);
    }, 0)

    arrPastedItems.forEach(item => {
        if (item.count === maxLength && moda.indexOf(item.number) === -1) moda.push(item.number);
    })

    return moda;
}

const numbers = [6, 2, 55, 11, 78, 2, 55, 55, 77, 57, 87, 23, 2, 56, 3]
console.log(`Функція 2 - getModa - вираховує моду всіх переданих в неї аргументів\n ${numbers}\n результат - `, getModa(...numbers));

/* 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне
всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4*/

const getAverage = (...numbers) => {
    numbers = numbers.filter(Number.isInteger);
    return numbers.reduce((accum, currentValue) => accum + currentValue) / numbers.length;
}

console.log(`Функція 3 - getAverage - рахує середнє арифметичне всіх переданих в неї аргументів\n ${numbers}\n результат - `, getAverage(...numbers));

/* 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих
в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3*/

const getMedian = (...numbers) => {
    let median = 0;
    let medianIndex = 0;

    numbers = numbers.filter(Number.isInteger);
    numbers.sort((a, b) => a - b);

    if (numbers.length % 2 === 0) {
        medianIndex = numbers.length / 2;
        median = (numbers[medianIndex - 1] + numbers[medianIndex]) / 2;
    } else {
        medianIndex = Math.floor(numbers.length / 2);
        median = numbers[medianIndex];
    }
    return median;
}

const numbers4 = [1, 2, 3, 4, 5];
console.log(`Функція 4 - getMedian - рахує медіану всіх переданих в неї аргументів\n ${numbers4}\n результат - `, getMedian(...numbers4));

/* 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції.
    Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]*/

const filterEvenNumbers = (...numbers) => {
    return numbers.filter(item => item % 2 !== 0);
}

console.log(`Функція 5 - filterEvenNumbers - фільтрує парні числа передані як аргументи функції \n ${numbers}\n результат - `, filterEvenNumbers(...numbers));

/* 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3*/

const countPositiveNumbers = (...numbers) => {
    return numbers.filter(item => item > 0).length;
}
const numbers6 = [1, -2, 3, -4, -5, 6];
console.log(`Функція 6 - countPositiveNumbers - рахує кількість чисел більших 0\n ${numbers6}\n результат - `, countPositiveNumbers(...numbers6));

/* 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи
в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]*/

const getDividedByFive = (...numbers) => {
    return numbers.filter(item => item % 5 === 0);
}
const numbers7 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
console.log('Функція 7 - getDividedByFive - відфільтровує усі елементи в масиві та залишить тільки ті,' +
    ` які діляться на ціло на 5\n ${numbers7}\n результат - `, getDividedByFive(...numbers7));

/* 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2)
замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно
розбити масив на слова за допомогою функції .split(" "), після чого масив
необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте
можливість розширювати cписок цих слів у майбутньому.
    Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing
kidding?"
    Приклад: replaceBadWords("Holy shit!") -> "Holy ***!"
Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"*/

const replaceBadWords = (str) => {
    const badWords = ['shit', 'fuck'];

    for (let i = 0; i < badWords.length; i++) {
        str = str.replace(badWords[i], '*'.repeat(badWords[i].length));
    }
    return str;
}
console.log('Функція 8 - replaceBadWords - замінить погані слова на зірочки \n', replaceBadWords("Are you fucking kidding?"));
console.log(replaceBadWords("It's bullshit!"));

/*9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні
склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди
видаляються. Рядок приводится до нижнього регістру.
    Приклад: divideByThree("Commander) -> ["com", "man", "der"]
Приклад: divideByThree("live") -> ["liv", "e"]*/

const divideByThree = (word) => {
    if (word.length <= 3) return word;

    let result = [];

    word = word.replaceAll(' ', '').toLowerCase();

    for (let i = 0; i < word.length; i = i + 3) {
        result.push(word.slice(i, i+3));
    }
    return result;
}
console.log('Функція 9 - divideByThree - розбиває кожне слово на умовні склади по 3 букви\n', divideByThree("Com man  der"));
