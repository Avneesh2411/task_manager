document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('jokeButton').addEventListener('click', receiveJoke);
});

function receiveJoke() {
    chrome.runtime.sendMessage({message: 'getJoke'}, function(response) {
        displayJoke(response.joke);
    });
}

function displayJoke(joke) {
    document.getElementById('jokeContainer').innerText = joke;
}