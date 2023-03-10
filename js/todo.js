const letme = new Audio("soundeffect/letmedoitforyoumeme.mp3");
// soundEffect.volume = 0.5;
// soundEffect.loop = true;
// soundEffect.play();
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const borzoi = document.querySelector(".borzoi-icon");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  handleAnimation();
  setTimeout(function () {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }, 1500);
}

function paintToDo(newTodo) {
  if (toDos.length < 10) {
    setTimeout(function () {
      const li = document.createElement("li");
      li.id = newTodo.id;
      const span = document.createElement("span");
      span.innerText = newTodo.text;
      const button = document.createElement("button");
      button.innerHTML = "✅";
      button.style.background = "transparent";
      button.style.border = "none";
      button.addEventListener("click", deleteToDo);
      li.appendChild(button);
      li.appendChild(span);
      toDoList.appendChild(li);
    }, 1500);
  } else {
    alert(`mOrE ThAn 10 tO-dOs?!?!?! let me do it for you....`);
    toDos.pop();
  }
}

function handleToDoSubmit(event) {
  if (toDos.length < 9) {
    handleAnimation();
  } else {
    letme.volume = 0.5;
    letme.play();
  }
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function handleAnimation() {
  letme.volume = 0.5;
  letme.play();
  borzoi.classList.add("letme-animation");
  setTimeout(function () {
    borzoi.classList.remove("letme-animation");
  }, 3000);
}

function handleClear(event) {
  event.preventDefault();
  handleAnimation();
  const li = event.target.previousElementSibling.querySelectorAll("li");
  setTimeout(function () {
    for (let i = 0; i < li.length; i++) {
      li[i].remove();
    }
    toDos = [];
    saveToDos();
  }, 1500);
}

// toDoForm.addEventListener("submit", handleAnimation);
toDoForm.addEventListener("submit", handleToDoSubmit);
clear.addEventListener("click", handleClear);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
