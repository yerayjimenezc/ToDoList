const task = document.getElementById('new-task')
const addButton = document.getElementById('btn-add-task')
const list = document.getElementById('list')
const pendingTasks = document.getElementById('counter')
let taskCounter = 0
let buttonCounter = 0 


function addTodo() {
  let newTodo = document.createElement('div')
  newTodo.setAttribute('class', 'container-note')
  newTodo.innerHTML = `<span id="note">${task.value}</span><button id="delete-button-${buttonCounter}">¡Done!</button>`
  list.appendChild(newTodo)
  buttonCounter++
  task.value = ''
  pendingTasks.innerText = taskCounter++
}

addButton.onclick = addTodo


// const deleteButton = document.getElementById('delete-button')

// function deleteTodo() {
    
// }

// deleteButton.onclick = deleteTodo