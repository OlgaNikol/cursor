/*
Завдання 1:
Створіть нескінченний генератор ідентифікаторів.
    Повинен працювати наступним чином:
    const idGenerator = createIdGenerator();
idGenerator.next().value -> 1
idGenerator.next().value -> 2
idGenerator.next().value -> 3*/

function* createIdGenerator() {
    let id = 1;

    while (true) {
        yield id++;
    }
}

const idGenerator = createIdGenerator();

console.log('Завдання 1 - createIdGenerator\n');
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

/*
Завдання 2 (advanced)
Створіть генератор, який буде регулювати розміри шрифту для
вашого сайту.*/

function* newFontGenerator(fontSize) {
    let currentSize = fontSize;

    while (true) {
        const upOrDown = yield currentSize;
        if (upOrDown === 'up') {
            currentSize += 2;
        }
        if (upOrDown === 'down') {
            currentSize -= 2;
        }
    }
}

const fontGenerator = newFontGenerator(14);

console.log('Завдання 2 - fontGenerator\n');
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);