const clock = document.querySelector("h2#clock");

loginForm.addEventListener("submit", unhiddenClock);

function getClock() {
  if (localStorage.username) {
    clock.classList.remove("hidden_visbility");
  }
  const time = new Date();
  const hour = String(time.getHours()).padStart("2", 0);
  const minute = String(time.getMinutes()).padStart("2", 0);
  const second = String(time.getSeconds()).padStart("2", 0);
  clock.innerText = `${hour}:${minute}`;
}
getClock();
setInterval(getClock, 1000);

function unhiddenClock() {
  clock.classList.remove("hidden_visbility");
}
