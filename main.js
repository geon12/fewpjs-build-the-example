// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal");
modal.classList.add("hidden");


document.addEventListener('DOMContentLoaded',function(){
  const heartsList = document.getElementsByClassName("like-glyph");
  addEventListenerToHearts(heartsList);
});

function addEventListenerToHearts(hearts) {
  hearts = [...hearts];
  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      makeServerCall(heart);
    })
  });
}


function makeServerCall(heart) {
  mimicServerCall()
    .then(() => {
      if(heart.innerHTML === EMPTY_HEART){
        heart.innerHTML = FULL_HEART;
        heart.classList.add("activated-heart");
      }
      else{
        heart.innerHTML = EMPTY_HEART
        heart.classList.remove("activated-heart");
      }
    })
    .catch( (error) => {
      const errorMessage = document.getElementById("modal-message");
      errorMessage.innerHTML = error;
      modal.classList.remove("hidden");
      setTimeout(() => modal.classList.add("hidden"), 5000);
  })
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
