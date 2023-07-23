const BASE_URL = 'https://swapi.dev/api/';

const getCharsByFilmId = id => {
    return fetch(`${BASE_URL}films/${id}`)
}

const getPlanets = page => {
    return fetch(`${BASE_URL}planets/?page=${page}`)
}

const getCharsBtn = document.getElementById('getCharsBtn');
const getPlanetsBtn = document.getElementById('getPlanetsBtn');
const getNextBtn = document.getElementById('next');
const list = document.querySelector('.char__list');
const input = document.getElementById('filmId');

const getCharsInfo = event => {
    event.preventDefault();
    list.innerHTML = '';
    const filmNumber = input.value ? input.value : 1;

    getCharsByFilmId(filmNumber).then(response => {
        return response.json()
    }).then(({characters}) => {
        characters.forEach(item => {
            fetch(item).then(response => {
                return response.json()
            }).then(data => {
                list.innerHTML += `
                <li class="char__item">
                    <div class="char__info">
                        <span class="name">${data.name}</span><br>
                        <span class="label">birth year: </span><span class="value">${data.birth_year}</span>
                        <span class="label">gender: </span><span class="value"><i class="fas fa-light ${getGender(data.gender)}"></i></span>
                    </div>
                </li>`
            })
        })
    })
}

const getPlanetsInfo = event => {
    event.preventDefault();
    list.innerHTML = '';

    getNextBtn.disabled = false;

    const message = document.querySelector('.message');
    if (message) message.remove();

    sessionStorage.setItem('page', '1');

    getPlanets(1).then(response => {
        return response.json()
    }).then(({results}) => {
        results.forEach(item => {
            list.innerHTML += `
                <li class="char__item">
                    <div class="char__info">
                        <span class="name">${item.name}</span>
                    </div>
                </li>`
        })
    })
}

const getPlanetsNext = event => {
    event.preventDefault();

    if (document.querySelector('.message')) {
        return;
    }

    list.innerHTML = '';

    let page = sessionStorage.getItem('page');

    if (page < 6) {
        page = Number(sessionStorage.getItem('page')) + 1;
        sessionStorage.setItem('page', page.toString());
    } else {
        list.innerHTML = '';
        const message = document.createElement('div');
        message.classList.add('message');
        document.body.appendChild(message);

        message.innerHTML = `
                <span>This is last page</span>`
        return;
    }

    getPlanets(page).then(response => {
        return response.json()
    }).then(({results}) => {
        results.forEach(item => {
            list.innerHTML += `
                <li class="char__item">
                    <div class="char__info">
                        <span class="name">${item.name}</span>
                    </div>
                </li>`
        })
    })
}

getCharsBtn.addEventListener('click', getCharsInfo);
getPlanetsBtn.addEventListener('click', getPlanetsInfo);
getNextBtn.addEventListener('click', getPlanetsNext);

function getGender(value) {
    let genderIcon = null;

    switch (value) {
        case 'female':
            genderIcon = 'fa-person-dress';
            break;
        case 'male':
            genderIcon = 'fa-person';
            break;
        case 'hermaphrodite':
            genderIcon = 'fa-person-half-dress';
            break;
        default:
            genderIcon = 'fa-genderless';
    }
    return genderIcon;
}