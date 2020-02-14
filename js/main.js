(()=>{
//ad an event listener to the window
//and capture al the keyboard key presses
function playSound(event){
  // debugger;
  let audioElement = document.querySelector(`audio[data-key="${event.keycode}"]`);
//if we have a match,then play the sound that goes with the keyboard key
audioElement.currenttime=0;//no bracket means it`s property
audioElement.play();//round brackets means this is a method - a built -in function
}
//add an event listener to the window
// and capture  all the keyboard key presses

window.addEventlistener('keydown',playsound);





})();
