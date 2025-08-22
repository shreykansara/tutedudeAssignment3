let btn = document.getElementById('greet').addEventListener('click', () => {
    // document.getElementById('name').innerText = 'Hello, ' + document.getElementById('input').value
    document.getElementById('name').innerText = `Hello, + ${document.getElementById('input').value}`
})

let red = document.getElementById('red')
red.addEventListener('click', () => {
    red.style.backgroundColor = 'red';
    red.style.color = 'white'
})

let blue = document.getElementById('blue')
blue.addEventListener('click', () => {
    blue.style.backgroundColor = 'blue';
    blue.style.color = 'white'
})

let green = document.getElementById('green')
green.addEventListener('click', () => {
    green.style.backgroundColor = 'green';
    green.style.color = 'white'
})

let yellow = document.getElementById('yellow')
yellow.addEventListener('click', () => {
    yellow.style.backgroundColor = 'yellow';
    yellow.style.color = 'white'
})


