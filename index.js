const divDrum = document.getElementsByClassName("div-drum");
const audioDrum = document.getElementsByClassName("audio-drum");

for (let i = 0; i < divDrum.length; i++) {
  divDrum[i].addEventListener(
    "click",
    (playDrumMouse = () => {
      audioDrum[i].play();
      audioDrum[i].currentTime = 0;
      divDrum[i].style.background = "#ffd700";
      setTimeout(function () {
        divDrum[i].style.background = "black";
      }, 100);
    })
  );
}
buttonArray = ["t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h"];
for (let i = 0; i < buttonArray.length; i++) {
  const element = buttonArray[i];
  document.addEventListener(
    "keydown",
    (playDrumKeyboard = (event) => {
      if (event.key == element) {
        audioDrum[i].play();
        audioDrum[i].currentTime = 0;
        divDrum[i].style.background = "#ffd700";
        setTimeout(function () {
          divDrum[i].style.background = "black";
        }, 100);
      }
    })
  );
}
