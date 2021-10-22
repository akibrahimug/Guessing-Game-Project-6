const keyboard = document.getElementById('qwert');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const phrases = ['see eye to eye', 'the best of both worlds', 'speak of the devil', 'break a leg',  'blessing in disguise']
let missed = 0;

const getRandomPhraseAsArray = (arr) => {
    const rand = Math.floor(Math.random()*arr.length);
    const characteArray = arr[rand].split('');
    return characteArray
}