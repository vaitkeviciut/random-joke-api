let jokeForm = document.querySelector('#joke-form')
let jokeOutput = document.querySelector('#joke-output')
let submit = document.querySelector('#submit');

jokeForm.after(jokeOutput);

jokeForm.addEventListener('submit', (event) => {
    event.preventDefault()

    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data => {
        let setup = data.setup
        let punchline = data.punchline
        let randomJoke = `${setup} ${punchline}`

        jokeOutput.textContent = randomJoke;
        submit.value = 'Another joke?'
    })
})