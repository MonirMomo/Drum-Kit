for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button.drum")[i].addEventListener("click", handleClick);
  document.addEventListener("keydown", handleKeydown);
}

function handleKeydown(event) {
  makeSound(event.key);
  addAnimation(event.key);
}


function handleClick() {

  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  addAnimation(buttonInnerHTML);
}

function addAnimation(key){
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);


}

function makeSound(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
  }


}
