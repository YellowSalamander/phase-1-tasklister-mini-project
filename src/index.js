document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
e.preventDefault()
const newTaskInput = document.querySelector('#new-task-description');
const priorityInput = document.querySelector('#priority');
console.log(newTaskInput.value);
addTaskToForm(newTaskInput.value, priorityInput.value);
form.reset()
  })
});

let tasks = [];
let sortSelect = document.querySelector('#sort-task');
sortSelect.addEventListener('change',sortTask)


function addTaskToForm (task, priority){
  tasks.push({task: task, priority: priority });
  sortTask();
  renderTasks();
}

function renderTasks(){
  let list = document.querySelector('#task-container');
  list.innerHTML = '';
  for (let task of tasks) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', deleteTask)
    btn.textContent = `x`
    p.textContent = `${task.task} (${task.priority}) `
    if (task.priority === 'high') {
      p.classList.add('red');
    } else if (task.priority === 'medium') {
      p.classList.add('yellow');
    } else {
      p.classList.add('green');
    }
    p.appendChild(btn);
    list.appendChild(p)
  }
}
 

function deleteTask(e) {
  let taskText = e.target.parentNode.firstChild.textContent.trim();
 tasks = tasks.filter((element)=> element.tasks !== tasks.tasks)
e.target.parentNode.remove()

}


function sortTask() {
  let sortSelect = document.querySelector('#sort-task');
  let selectedValue = sortSelect.value;
  if (selectedValue === 'h-l') {
    tasks.sort((a, b) => {
      if (a.priority === 'high' && b.priority !== 'high') {
        return -1;
      } else if (a.priority !== 'high' && b.priority === 'high') {
        return 1;
      } else if (a.priority === 'medium' && b.priority === 'low') {
        return -1;
      } else if (a.priority === 'low' && b.priority === 'medium') {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (selectedValue === 'l-h') {
    tasks.sort((a, b) => {
      if (a.priority === 'low' && b.priority !== 'low') {
        return -1;
      } else if (a.priority !== 'low' && b.priority === 'low') {
        return 1;
      } else if (a.priority === 'medium' && b.priority === 'high') {
        return -1;
      } else if (a.priority === 'high' && b.priority === 'medium') {
        return 1;
      } else {
        return 0;
      }
    });
  }
  renderTasks()
}


// V1.0 before sort functionality:


// document.addEventListener("DOMContentLoaded", () => {

//   let form = document.querySelector('form');
//   form.addEventListener('submit', (e) => {
// e.preventDefault()
// const newTaskInput = document.querySelector('#new-task-description');
// const priorityInput = document.querySelector('#priority');
// console.log(newTaskInput.value);
// addTaskToForm(newTaskInput.value, priorityInput.value);
// form.reset()
//   })
// });

// function addTaskToForm(task){
//   let p = document.createElement('p')
//   let btn = document.createElement('button')
//   btn.addEventListener('click', deleteTask)
//   btn.textContent = `x`
//   p.textContent = `${task}  `
//   let prioritySpan = document.createElement('span');
//   prioritySpan.textContent = `(${priority.value})`;
//   p.appendChild(prioritySpan);
//   p.appendChild(btn)
//   if (priority.value === 'high') {
//     p.classList.add('red');
//     console.log('it works')
//   } else if (priority.value === 'medium') {
//     p.classList.add('yellow');
//   } else {
//     p.classList.add('green');
//   }
//   document.querySelector('#list').appendChild(p)
// }

// function deleteTask(e) {
// e.target.parentNode.remove()
// }