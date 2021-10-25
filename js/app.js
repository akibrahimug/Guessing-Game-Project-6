const keyboard = document.querySelector('#qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const ul = document.querySelector('ul');
const tries = document.querySelectorAll('.tries')

// loop through the buttons
// const button = () => {
//     for(const btn of buttons){
//         return btn
//     }
// }

// All phrases
const phrases = ['see eye to eye', 'the best of both worlds', 'speak of the devil', 'break a leg',  'blessing in disguise']
let missed = 0;

// Remove the OverLayed Starting page
startBtn.addEventListener('click', e => {
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
})

// Random Word Generator and Character convertor
const getRandomPhraseAsArray = (arr) => {
    const rand = Math.floor(Math.random()*arr.length);
    return arr[rand].split('');
}
const phraseArray = getRandomPhraseAsArray(phrases);

// Loop of listItems of Characters
const addPhraseToDisplay = (arr) => {
    for(let i = 0; i < arr.length; i++){
        const listItem = document.createElement('li');
        listItem.textContent = arr[i];
        // ul.appendChild(listItem);
        phrase.firstElementChild.appendChild(listItem);
        if(listItem.textContent === " "){
            listItem.classList.add('space');
        }else{
            listItem.classList.add('letter');
           
        }
    }
}

const displayPhrase = addPhraseToDisplay(phraseArray);

const checkLetter = (btn) => {
    const letters = document.querySelectorAll('.letter');
    let match = '';
    for(const letter of letters){
        if(letter.innerHTML === btn.textContent){
            match = letter.classList.add('show');
        }else{
            match = null;
        }
        
    }
    return match;
 }


keyboard.addEventListener('click', e => {
    const button = e.target;
    if(button.tagName === "BUTTON"){
        button.classList.add('chosen');
        button.disabled = true;
    }
    const letterFound = checkLetter(button);
    return letterFound;
})

const triesCount = () => {
    if(letterFound === null){
        for(const trial of tries){
            trial.style.visibility = 'hidden';
        }
    }
}