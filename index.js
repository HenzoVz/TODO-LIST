let arrayTask = [];
let arrayStorage = JSON.parse(localStorage.getItem("@TODOLIST"));

onload = function() {
  
  arrayTask = arrayStorage;
  let task = document.getElementById("task");

  for (let index in arrayStorage) {
    task.innerHTML += "<p>" + arrayStorage[index] + "</p>";
  }

};

function handleClickAddTask(element) {
  
  let value = element.value;
  let task = document.getElementById("task");
  task.innerHTML +=  "<p>" + value + "</p>"

  arrayTask.push(value);
  console.log(arrayTask)
  localStorage.setItem("@TODOLIST", JSON.stringify(arrayTask))

};


function handleClickClear() {
  let task = document.getElementById("task");
  
  task.innerHTML = ''
  localStorage.removeItem("@TODOLIST");
}