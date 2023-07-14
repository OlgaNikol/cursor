
const generateBlocks = () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    for (let i = 0; i < 25; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = getRandomColor();
        wrapper.insertAdjacentElement('beforeend', square);
    }
}

const generateBlocksInterval = () => {
    generateBlocks();
    const squares = document.querySelectorAll('div.square');
    setInterval(() => squares.forEach(item => item.style.backgroundColor = getRandomColor()),
        1000);
}

generateBlocksInterval();

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}