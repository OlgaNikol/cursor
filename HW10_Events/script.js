const buttonsArr = document.querySelectorAll('.button');
let audio = null;

const play = (event) => {
    buttonsArr.forEach(item => item.classList.remove('active'));

    if (event.key && event.key.match(/[qwerty]/ig)) {
        document.getElementById(event.key).classList.add('active');
        audio = event.key;
    } else if (event.target && event.target.matches('div.button')) {
        event.target.classList.add('active');
        audio = event.target.id;
    } else if (event.target && event.target.matches('kbd')) {
        event.target.parentElement.classList.add('active');
        audio = event.target.parentElement.id;
    } else return;

    audio = new Audio(`sounds/${audio}.mp3`);
    audio.play();
}

document.addEventListener('keydown', play);
document.addEventListener('click', play);
