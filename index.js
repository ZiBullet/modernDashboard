
// The arr with tasks
import { tasks } from "./js/arrs.js"
import { showBarTask, showTableTask, containerBar, containerTable, toOpen, toClose } from "./js/createTask.js"
// The tablet where my task would be appered / shown 



const tableType = document.querySelectorAll('[data-type]')
tableType.forEach(type => {
    type.onclick = () => {
        tableType.forEach(check => {
            check.classList.remove('selected__type')
            check.classList.add('unselected__type')
        })
        type.classList.remove('unselected__type')
        type.classList.add('selected__type')
        chosenType(type.getAttribute('data-type'))
    }

})
const adder = document.forms.creator
const inputs = adder.querySelectorAll('input')
adder.onsubmit = (event) => {
    event.preventDefault()
    let errors = []
    inputs.forEach(input => {
        if (input.value.length === 0) {
            errors.push('error')
        }
    })
    errors.length === 0 ? submit() : console.log('Fill the missed blanks')
}
function submit () {
    let task = {}
    let fm = new FormData(adder)
    fm.forEach((value, key) => {
        task[key] = value
    })
    tasks.push(task)
    console.log(tasks);
}
function chosenType (type) {
    switch (type) {
        case 'table':
            containerTable.style.display = 'block'
            containerBar.style.display = 'none'
            showTableTask(tasks)
            break;
        case 'tile':
            containerTable.style.display = 'none'
            containerBar.style.display = 'grid'
            showBarTask(tasks)
            break;
        default:
            break;
    }
}
const closer = document.querySelectorAll('.closer')
const modal = document.querySelector('.modal__creator')
const modalBg = document.querySelector('.creator__bg')
const addTask = document.querySelector('.adder')
addTask.onclick = () => {
    toOpen(modalBg, modal)
}
closer.forEach(shut => {
    shut.onclick = () => {
        toClose(modalBg, modal)
    }
})

