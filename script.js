const button = document.getElementById('nothing-button');
let index = 0;
button.addEventListener('click', function () {
  index++;
  setButtonText();
  playAnnoyingAudioIfAppropriate();
  resetCounterIfEndOfList();
});
function setButtonText() {
    button.textContent = listOfQuips[index];
}
function resetCounterIfEndOfList() {
    if (index === listOfQuips.length - 1) {
        index = 0;
    }
}
function playAnnoyingAudioIfAppropriate() {
    if (index === 3) {
        const audio = new Audio('augh.mp3');
        audio.play();
    }
}
const listOfQuips = [
    "Click this button to do nothing",
    "bro 🗿",
    "you're a naughty boy",
    "AUUGHHH! (sound on) 🔊",
    "If I had a dollar for every brain you don't have, I'd have one dollar.",
    "Don't you have to go be stupid somewhere else?",
    "Roses are red",
    "Violets are blue",
    "My code won't compile",
    "On line 32"
];