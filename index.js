const arrayTask = [];


onload = function() {
  let arrayStorage = localStorage.getItem("@TODOLIST");
  let newArray = JSON.parse(arrayStorage);
  
  let task = document.getElementById("task");

  for (let index in newArray) {
    task.innerHTML += "<p>" + newArray[index] + "</p>";
  }

};

function handleClickAddTask(element) {
  
  let value = element.value;
  let task = document.getElementById("task");
  task.innerHTML +=  "<p>" + value + "</p>"
  arrayTask.push(value);

  localStorage.setItem("@TODOLIST", JSON.stringify(arrayTask))

};


function handleClickClear() {
  let task = document.getElementById("task");
  task.innerHTML = ''
  localStorage.removeItem("@TODOLIST");
}