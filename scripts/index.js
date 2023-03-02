const keys = document.querySelectorAll(".notes__key");

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.notes__key[data-key="${e.keyCode}"]`);
  if (!audio) return; /**остановить функцию*/
  audio.currentTime = 0; /**перемотать к началу*/
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; /**пропустить, если не transform*/
  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
