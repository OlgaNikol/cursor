const BASE_URL = 'https://swapi.dev/api/';

const fetchCharsByFilmId = id => {
    return fetch(`${BASE_URL}films/${id}`)
}

const fetchPlanets = page => {
    return fetch(`${BASE_URL}planets/?page=${page}`)
}

const getCharsBtn = document.getElementById('getCharsBtn');
const getPlanetsBtn = document.getElementById('getPlanetsBtn');
const getNextBtn = document.getElementById('next');
const list = document.querySelector('.char__list');
const input = document.getElementById('filmId');
const wookieeIcon = document.getElementById('lng');
const buttons = document.querySelectorAll('button');

let wookiee = false;

const getCharsInfo = event => {
    event.preventDefault();
    list.innerHTML = '';

    let filmNumber;
    if (input.value) {
        filmNumber = input.value;
    } else {
        filmNumber = 1;
        input.value = 1;
    }

    buttons.forEach(btn => btn.disabled = true);

    fetchCharsByFilmId(filmNumber).then(response => {
        return response.json()
    }).then(({characters}) => {
        characters.forEach(item => {
            const url = !wookiee ? item : item + '?format=wookiee';
            fetch(url).then(response => {
                return response.json()
            }).then(data => {
                list.innerHTML += `
                <li class="char__item">
                    <div class="char__info">
                        <span class="name">${!wookiee ? data.name : data.whrascwo}</span><br>
                        <span class="label">${!wookiee ? 'birth year' : 'rhahrcaoac_roworarc'}: </span><span class="value">${!wookiee ? data.birth_year : data.rhahrcaoac_roworarc}</span>
                        <span class="label">${!wookiee ? 'gender' : 'rrwowhwaworc'}: </span><span class="value"><i class="fas fa-light ${!wookiee ? getGender(data.gender) : getGender(data.rrwowhwaworc)}"></i></span>
                    </div>
                </li>`
            })
        })
    }).finally(() => buttons.forEach(btn => {
        btn.disabled = false;
        getNextBtn.disabled = true;
    }))
}

const getPlanetsInfo = event => {
    event.preventDefault();
    list.innerHTML = '';

    const message = document.querySelector('.message');
    if (message) message.remove();

    sessionStorage.setItem('page', '1');

    buttons.forEach(btn => btn.disabled = true);
    getPlanets(1);
}

const getPlanetsNext = event => {
    event.preventDefault();
    list.innerHTML = '';

    const message = document.querySelector('.message');
    if (message) return;

    let page = sessionStorage.getItem('page');

    if (page && page < 6) {
        page = Number(sessionStorage.getItem('page')) + 1;
        sessionStorage.setItem('page', page.toString());
    } else {
        list.innerHTML = '';
        const message = document.createElement('div');
        message.classList.add('message');
        document.body.appendChild(message);
        message.innerHTML = `<span>This is last page</span>`
        return;
    }

    buttons.forEach(btn => btn.disabled = true);
    getPlanets(page);
}

function getPlanets(page) {
    fetchPlanets(page).then(response => {
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
    }).finally(() => buttons.forEach(btn => {
        btn.disabled = false;
    }));
}

const wookieeLng = event => {
    event.preventDefault();
    wookiee = !wookiee;
    if (wookiee) {
        wookieeIcon.style.color = 'rgb(240 158 0)';
    } else {
        wookieeIcon.style.color = '#d02b2b';
    }

}

getCharsBtn.addEventListener('click', getCharsInfo);
getPlanetsBtn.addEventListener('click', getPlanetsInfo);
getNextBtn.addEventListener('click', getPlanetsNext);
wookieeIcon.addEventListener('click', wookieeLng);

function getGender(value) {
    let genderIcon = null;

    switch (value) {
        case 'female':
        case 'wwwoscraanwo':
            genderIcon = 'fa-person-dress';
            break;
        case 'male':
        case 'scraanwo':
            genderIcon = 'fa-person';
            break;
        case 'hermaphrodite':
        case 'acworcscraakacrcoowaahaowo':
            genderIcon = 'fa-person-half-dress';
            break;
        default:
            genderIcon = 'fa-genderless';
    }
    return genderIcon;
}