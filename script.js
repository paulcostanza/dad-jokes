const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// Update Joke number
const jokeNum = document.getElementById('joke-num')
let num = 0

// when user clicks on button
jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// Uses the fetch API
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    // returns promises
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()

    jokeElement.innerHTML = data.joke

    num += 1
    jokeNum.innerHTML = `${num}`

}


