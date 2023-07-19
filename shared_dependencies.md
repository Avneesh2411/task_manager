1. "manifest.json": This file is the heart of the Chrome extension. It contains metadata about the extension such as its name, version, permissions, and the scripts it uses. It will reference "background.js" and "popup.html".

2. "background.js": This file contains the background script of the extension. It will contain the function to fetch a random joke from an API. The function name could be "getRandomJoke". It will also contain the logic to send the fetched joke to the popup script using chrome.runtime.sendMessage. The message name could be "sendJoke".

3. "popup.html": This file contains the HTML structure of the popup that appears when the extension icon is clicked. It will contain a button with an id "jokeButton" to fetch a new joke, and a div with an id "jokeContainer" to display the joke. It will reference "popup.js" and "styles.css".

4. "popup.js": This file contains the script for the popup. It will contain a function to receive the joke from the background script using chrome.runtime.onMessage.addListener. The function name could be "receiveJoke". It will also contain a function to display the joke in the "jokeContainer" div. The function name could be "displayJoke".

5. "styles.css": This file contains the CSS styles for the popup. It will style the "jokeButton" and "jokeContainer" elements.

Shared dependencies:
- "getRandomJoke" function in "background.js"
- "sendJoke" message name in "background.js"
- "jokeButton" id in "popup.html"
- "jokeContainer" id in "popup.html"
- "receiveJoke" function in "popup.js"
- "displayJoke" function in "popup.js"