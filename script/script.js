const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')


// add new task when submitted

form.addEventListener('submit', e =>{
    e.preventDefault()
    // creating an item or task
  
    const item = document.createElement('div')
    item.innerText = input.value
    item.classList.add('list-item')
    // add task or item to the list


    list.appendChild(item)

    // clear the input

    input.value = ''

    // removing task from the list 

    item.addEventListener('click', () =>{
        item.remove()
    })


})