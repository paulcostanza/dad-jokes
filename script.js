const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

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

}