for(var i=0 ;i<document.querySelectorAll("button").length ;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
var buttonInnerHtml = this.innerHTML;
makeSound(buttonInnerHtml);
makeAnimation(buttonInnerHtml);

  });

}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  makeAnimation(event.key);
});




function makeSound(key){
  switch(key){
  case "w":
  let tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;

  case "a":
  let tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;
  case "s":
  let tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;

  case "d":
  let tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;

  case "j":
  let crash = new Audio("sounds/crash.mp3");
  crash.play();
  break;

  case "k":
  let kickBass = new Audio("sounds/kick-bass.mp3");
  kickBass.play();
  break;

  case "l":
  let snare = new Audio("sounds/snare.mp3");
  snare.play();
  break;

  default:
  console.log(buttonInnerHtml);
  }
}
function makeAnimation(currentkey){
document.querySelector("."+ currentkey).classList.add("pressed");
setTimeout(function(){
  document.querySelector("."+ currentkey).classList.remove("pressed");
},50);





}
// let audio = new Audio("sounds/tom-1.mp3");
// audio.play();
