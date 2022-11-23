//declare fields

let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

//add and event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

//when form is filled in ensure user gets message if they do not add at least a Task
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

//add data to the console
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

//summary of tasks with some functions like delete,edit and complete as click events
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
            <i onClick= "completeTask(this);completeTasks()" class="far fa-thumbs-up"></i>
            <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          </span>
        </div>
    `);
    
  });

  resetForm();
};

//when the dustbin is clicked on remove all the data
let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
  
};

//when clciking on the edit button, open the form again and allow user to edit all fields
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

//adding the sort function to sort alphabetically based on textInput value//

const list = document.querySelector('.list');

const sort_alpha_button = document.querySelector('.sort-options .sort-tasks');

//add event listener for sort tasks
let desc = false;
sort_alpha_button.addEventListener('click', () => {
  let data = data.sort(list, 'text', desc);
  displayList (array);
  desc = !desc;
});

//converted the list to a string, need to convert the list 
//to an array for this to work OR sort this array of JSON objects

data = data.sort((a, b) => {
  if (a.text < b.text) {
    return -1;
  }
});

// script for strike through when clicking on thumbs up
let completeTask = new String("data");
         document.write(str.strike());
         alert(str.strike());
         
//other method
         todos = todos.sort(function (a, b) {
          let todoA = a.text.toLowerCase();
          let todoB = b.text.toLowerCase();
          if (todoA < todoB) {
          return -1;
          } else if (todoA > todoB) {
          return 1;
          }
          return 0;
          });


