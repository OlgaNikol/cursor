
const generateBlocks = () => {
    const collection = document.getElementsByClassName('wrapper');
    Array.from(collection).forEach(item => item.remove());

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    const square = document.createElement('div');
    square.classList.add('square');

    for (let i = 0; i < 25; i++) {
        let newElement = square.cloneNode(true);
        newElement.style.backgroundColor = getRandomColor();
        wrapper.insertAdjacentElement('beforeend', newElement);
    }
}

const generateBlocksInterval = () => {
    setInterval(generateBlocks, 2000);
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