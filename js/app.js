const keyboard = document.querySelector('#qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('a');
const ul = document.querySelector('ul');
const tries = document.querySelectorAll('.tries');
const h2 = document.querySelector('h2');
const overlay = document.getElementById('overlay');


// All phrases
const phrases = ['see eye to eye', 'the best of both worlds', 'speak of the devil', 'break a leg',  'blessing in disguise']
let missed = 0;

// Remove the OverLayed Starting page
startBtn.addEventListener('click', e => {
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

// Checking if the letter matches the button clicked
const checkLetter = (btn) => { 
    let match = null;
    const letters = document.querySelectorAll('.letter');
    for(const letter of letters){
        if(letter.textContent === btn.textContent){
           letter.classList.add('show');
           match = letter.textContent}
    }
    return match;
 }

// Event handler
keyboard.addEventListener('click', e => {
    e.stopPropagation();
    const button = e.target;
    if(button.tagName === "BUTTON"){
        button.classList.add('chosen');
        button.disabled = true;
    }
    // calling the letter checker function and assinging it a new var
    const letterFound = checkLetter(button);
    // removing the hearts that keep track of the wrong buttons pressed
        if(letterFound === null && button.tagName === "BUTTON"){
            if (missed < tries.length){
               tries[missed].innerHTML = `<img src = "images/lostHeart.png">`;
                missed ++;
            }
        }
        checkWin();
})

const winLose = (classItem, h2Content, startBtnContent) => {
    overlay.classList.add(classItem);
    overlay.style.visibility = 'visible';
    h2.textContent = h2Content;
    startBtn.textContent = startBtnContent;
    startBtn.addEventListener('click', e => {
        overlay.style.visibility = 'visible';
        window.location.reload();
    })
}

const checkWin = () => {
    const letters = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show')
        if(missed >= 5 && letters.length !== show.length){
           winLose('lose', 'Sorry, You lose', 'Try Again');
        }else if (missed < 5 && letters.length === show.length){
           winLose('win', 'Congratulations, You win', 'Play Again')
        }
    
}


