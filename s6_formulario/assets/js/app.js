// Variables
const listaTweets = document.querySelector('#lista-tweets');

// Event Listeners
eventListeners();

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);

    // Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}

// Funciones

// Agregar tweet del formulario
function agregarTweet(e) {
    e.preventDefault();

    // Leer el valor del textarea
    const tweet = document.querySelector('#tweet').value;
    
    // Crear elementos
    const li = document.createElement('li');
    const botonBorrar = document.createElement('a');

    // Establecer los valores de botonBorrar
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // Agregar el valor del textarea al elemento li
    li.innerText = tweet;
    // Agregar el botonBorrar al elemento li
    li.appendChild(botonBorrar);
    // agregar el contenido a la lista
    listaTweets.appendChild(li);

    // Agregar el tweet al local storage
    agregarTweetLocalStorage(tweet);

    // console.log(tweet);
}

function agregarTweetLocalStorage(tweet) {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    // Agregar el nuevo tweet
    tweets.push(tweet);

    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function obtenerTweetsLocalStorage() {
    let tweets;
    
    // Revisamos el local storage
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}

function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(element => {
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        const li = document.createElement('li');
        li.innerText = element;
        li.appendChild(botonBorrar);
        listaTweets.appendChild(li);
    });
}

function borrarTweet(e) {
    e.preventDefault();

    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

function borrarTweetLocalStorage(tweet) {
    let tweets, tweetBorrar;
    
    // Elimina la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
        if (tweetBorrar === tweet) {
            tweets.splice(index, 1);            
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}