const task = document.getElementById('new-task')
const addButton = document.getElementById('btn-add-task')
const list = document.getElementById('list')
const pendingTasks = document.getElementById('counter')
let taskCounter = 0
let buttonCounter = 0 


function addTodo() {
    taskCounter++
    let newTodo = document.createElement('div')
    newTodo.setAttribute('class', 'container-note')
    newTodo.innerHTML = `<input id="check-${buttonCounter}" type="checkbox"><span id="note">${task.value}</span><button id="delete-button-${buttonCounter}">Delete</button>`
    list.appendChild(newTodo)
    let deleteButton = document.getElementById(`delete-button-${buttonCounter}`)
    deleteButton.onclick = deleteNote
    let checkDone = document.getElementById(`check-${buttonCounter}`)
    checkDone.onchange = checkDoneBackground
    buttonCounter++
    task.value = ''
    pendingTasks.innerText = taskCounter
}

addButton.onclick = addTodo

task.onkeydown = (e) => {
    if(e.key === 'Enter'){
        addTodo()
    }
}

function deleteNote(e) {
    list.removeChild(e.target.parentNode)
    if (e.target.parentNode.getAttribute('class') === 'container-note'){
        taskCounter--
        pendingTasks.innerText = taskCounter
    }
}

function checkDoneBackground(e) {
    if(e.target.parentNode.getAttribute('class') === 'container-note-check'){
        e.target.parentNode.setAttribute('class', 'container-note')
        taskCounter++
        pendingTasks.innerText = taskCounter
    } else {
        e.target.parentNode.setAttribute('class', 'container-note-check')
        taskCounter--
        pendingTasks.innerText = taskCounter
    }
}