const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const couples = [];

/*Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
1. У вас повинен вийти вкладений масив з парами студентів:
    [["Олександр", "Олена"], [..], [...]];*/

const getPairs = (students) => {
    const boys = [];
    const girls = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].match(/а$/)) {
            girls.push(students[i]);
        } else {
            boys.push(students[i]);
        }
    }
    for (let i = 0; i < boys.length; i++) {
        couples.push([boys[i], girls[i]]);
    }
    return couples;
}

console.log('Функція 1. getPairs\n', getPairs(students));

/*2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
    Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]*/

const setThemesForCouples = (themes, couples) => {
    if (themes.length < couples.length) return 'Не вистачає тем для кількості пар студентів';

    const result = [];

    for (let i = 0; i < themes.length; i++) {
        result.push([couples[i].join(' і '), themes[i]]);
    }
    return result;
}

const couplesThemesArr = setThemesForCouples(themes, couples);
console.log('Функція 2. setThemesForCouples\n', couplesThemesArr);

/*3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]*/

const markStudents = (students, marks) => {
    if (marks.length < students.length) return 'Не вистачає оцінок студентів';

    const result = [];

    for (let i = 0; i < students.length; i++) {
        result.push([students[i], marks[i]]);
    }
    return result;
}
console.log('Функція 3. markStudents\n', markStudents(students, marks));

/*4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
(тут функція буде не чистою, але не повинна мутувати массив):
[["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]*/

const rateCouples = (arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push([...arr[i], setRandomMark()]);
    }
    return result;
}

function setRandomMark() {
    return Math.floor(Math.random() * (5 - 1) + 1);
}

console.log('Функція 4. setRandomMark\n', rateCouples(couplesThemesArr));

