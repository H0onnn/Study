const API_KEY = 'dc2ab72b81128da87b597756856d5c16';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // console.log('You live in', lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // const weatherIcon = document.querySelector('.wi');
            // const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            // const iconDesc = data.weather[0].description;

            // weatherIcon.style.backgroundImage = `url(${iconUrl})`;
            // weatherIcon.setAttribute('title', iconDesc);

            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');

            weather.innerHTML = `${data.weather[0].main} / ${Math.floor(data.main.temp)}°C`;
            city.innerHTML = data.name;
        });
}

function onGeoErr() {
    alter("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);