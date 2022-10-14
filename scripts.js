let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Task cannot be blank Batman, please add something.";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data = [{}];

let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  createTasks();
};

let createTasks = () => {
  tasks.innerHTML = "";
  data.map((x, y) => {
    return (tasks.innerHTML += `
    <div id=${y}>
          <span class="fw-bold">${x.text}</span>
          <span class="small text-secondary">${x.date}</span>
          <p>${x.description}</p>
  
          <span class="options">
            <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
            <i onClick= "completeTask(this);createTasks(strike)" class="far fa-thumbs-up"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `);
  });

  resetForm();
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
};

//function that that completes task.
let completeTask = (e) => {
  const element = createTasks
  console.log(createTasks) = createTasks.queryselector("tasks")
  let createTasks = e.parentElement.parentElement;
     
  // style..
  createTasks.style.textDecoration = "line-through";
  

  deleteTask(e);
}

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;

  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  deleteTask(e);
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

(() => {
  data = JSON.parse(localStorage.getItem("data")) || []
  console.log(data);
  createTasks();
})();

//added sort tasks to sorts tasks according to task heading - not functioning yet
let sorttasks = tasks.innerHTML

tasks.sort(function (a, b) {
  if (a.tasks < b.tasks) {
    return -1;
  }
  if (a.tasks > b.tasks) {
    return 1;
  }
  return 0;
});

console.log(tasks);

//added sort tasks to sorts tasks according to task due date - not functioning yet

//let array = [{id: 1, date: Mar 12 2012 10:00:00 AM}, {id: 2, date: Mar 8 2012 08:00:00 AM}];

array.sort(function(o1,o2){
  if (sort_o1_before_o2)    return -1;
  else if(sort_o1_after_o2) return  1;
  else                      return  0;
});