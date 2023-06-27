const students = [
    {
        name: "Tanya",
        course: 3,
        subjects: {
            math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4]
        }
    }, {
        name: "Victor",
        course: 4,
        subjects: {
            physics: [5, 5, 5, 3],
            economics: [2, 3, 3, 3, 3, 5],
            geometry: [5, 5, 2, 3, 5]
        }
    }, {
        name: "Anton",
        course: 2,
        subjects: {
            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
            english: [5, 3],
            cosmology: [5, 5, 5, 5]
        }
    }
];

/* 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Datascience"] - яка повертає список предметів
 для конкретного студента.
     Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ –замінити на пробіл*/

const getSubjects = (studentName) => {
    const subjectsObject = students.filter(item => item.name === studentName)[0].subjects;
    const subjectList = Object.keys(subjectsObject);
    return subjectList.map(item => (item[0].toUpperCase() + item.slice(1)).replace(/_/g, ' '));
}

console.log('Функція 1 - getSubjects\n', getSubjects('Tanya'));

/* 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне
середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
    Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у
попередніх домашніх завданнях :)*/

const getAverageMark = (studentName) => {
    let marks = [];
    const subjectsObject = students.filter(item => item.name === studentName)[0].subjects;

    for (let key in subjectsObject) {
        marks.push(...subjectsObject[key]);
    }
    return (marks.reduce((accum, currentValue) => accum + currentValue) / marks.length).toFixed(2);
}

console.log('Функція 2 - getAverageMark\n', getAverageMark('Tanya'));

/* 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name":
        "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по
переданому студенту (вам знадобиться функція з попереднього завдання).
Повинна бути виведена інформація: курс, ім'я, середня оцінка.*/

const getStudentInfo = (studentName) => {
    const studentObject = students.filter(item => item.name === studentName)[0];

    return {
        course: studentObject.course,
        name: studentObject.name,
        averageMark: getAverageMark(studentName)
    };
}

console.log('Функція 3 - getStudentInfo\n', getStudentInfo('Tanya'));

/* 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
– яка повертає імена студентів у алфавітному порядку.*/

const getStudentsNames = (students) => {
    return students.map(item => item.name).sort();
}

console.log('Функція 4 - getStudentsNames\n', getStudentsNames(students));

/* 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає
кращого студента зі списку по показнику середньої оцінки.*/

const getBestStudent = (students) => {
    const arr = students.map(item => ({
        name: item.name,
        averageMark: getAverageMark(item.name)
    }));
    let maxAverageMark = 0;
    let resultName = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].averageMark > maxAverageMark) {
            maxAverageMark = arr[i].averageMark;
            resultName = arr[i].name;
        }
    }

    return resultName;
}

console.log('Функція 5 - getBestStudent\n', getBestStudent(students));

/*6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.*/

const calculateWordLetters = (word) => {
    let resultObject = {};

    for (let i = 0; i < word.length; i++) {
        const re = new RegExp(word[i], 'ig');
        resultObject[word[i]] = word.match(re).length;
    }

    return resultObject;
}

console.log('Функція 6 - calculateWordLetters\n', calculateWordLetters("тест"));
