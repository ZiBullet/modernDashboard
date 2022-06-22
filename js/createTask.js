

const containerTable = document.querySelector('.container__table')
const containerBar = document.querySelector('.container__bar')
function showTableTask (tasks) {
    containerTable.innerHTML = ''
    let table = document.createElement('table')
    for (let task of tasks) {
        // Creating task bars

        let tbody = document.createElement('tbody')
        let tr = document.createElement('tr')
        let deal = document.createElement('td')
        let description = document.createElement('td')
        let date = document.createElement('td')
        let time = document.createElement('td')
        let status = document.createElement('td')
        // Decorating them
        deal.innerHTML = task.title
        description.innerHTML = task.description
        date.innerHTML = task.date
        time.innerHTML = task.time
        if (task.status) {
            status.innerHTML = 'Выполнено'
        } else {
            status.innerHTML = 'Не выполнено'
            status.style.color = 'var(--color-red-bright)'
        }
        // Connecting each of them to other
        containerTable.append(table)
        table.append(tbody)
        tbody.append(tr)
        tr.append(deal, description, date, time, status)
    }
}

function showBarTask (tasks) {
    containerBar.innerHTML = ''
    for (let task of tasks) {
        let bar = document.createElement('div')
        let deal = document.createElement('h3')
        let description = document.createElement('p')
        let timeBox = document.createElement('div')
        let date = document.createElement('span')
        let time = document.createElement('span')
        let status = document.createElement('span')

        bar.classList.add('bar')
        deal.innerHTML = task.title
        description.innerHTML = task.description
        timeBox.classList.add('time')
        date.innerHTML = task.date
        time.innerHTML = task.time
        if (task.status) {
            status.innerHTML = 'Выполнено'
        } else {
            status.innerHTML = 'Не выполнено'
            status.style.color = 'var(--color-red-bright)'
        }

        bar.append(deal, description, timeBox, status)
        timeBox.append(date, time)
        containerBar.append(bar)
    }
}
function toOpen (modalBg, modal) {
    modal.style.display = 'flex'
    modalBg.style.display = 'block'
    setTimeout(() => {
        modal.style.opacity = '1'
        modalBg.style.opacity = '1'
    }, 300)
}
function toClose (modalBg, modal) {
    modalBg.opacity = '0'
    modal.opacity = '0'
    setTimeout(() => {
        modal.style.display = 'none'
        modalBg.style.display = 'none'
    }, 300);
}

export {showTableTask, showBarTask, containerBar, containerTable, toOpen, toClose}