const keyboard = document.querySelector('#qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const ul = document.querySelector('ul');
const buttons = document.querySelectorAll('button')

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
            listItem.classList.remove('letter');
        }else{
            listItem.classList.add('letter');
            listItem.classList.add('show')
        }
        
        return listItem;
    }
}

// const checkLetter = (selected) => {
//     for(const btn of selected){
//         const guesed = addPhraseToDisplay(getRandomPhraseAsArray(phrases))
//         if(btn === guesed.textContent){
//             guesed.classList.add('show')
//         }
//         return guesed
//     }
    
// }

// keyboard.addEventListener('click', e => {

//     console.log(checkLetter(buttons) )
// })

