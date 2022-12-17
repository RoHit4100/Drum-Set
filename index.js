//Function to play music when button or key is press
function playMusic(trigger) {
  //using switch case statement instead of if else
  switch (trigger) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log("Use Given Keywords!");
      break;
  }
}

//Function to trigger animation when button or is key is press
function playAnimation(trigger) {
  var buttonClicked = document.querySelector("." + trigger);
  //setting the class pressed to the triggered reason
  buttonClicked.classList.add("pressed");
  //setting the timeout for the class which we added to get remove automatically
  setTimeout(function () {
    buttonClicked.classList.remove("pressed");
  }, 100);
}

var buttons = document.querySelectorAll(".drum");
// Adding Event Listener to all the buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var clickedButton = this.innerHTML;
    //Calling the playMusic function
    playMusic(clickedButton);
    //Calling the playAnimation function
    playAnimation(clickedButton);
  });
}

// Adding eventListener to all the document instead of giving to particular element to react with the keys press of keyboard

document.addEventListener("keypress", function (event) {
  //Calling the playMusic function
  playMusic(event.key);
  //Calling the playAnimation function
  playAnimation(event.key);
});
