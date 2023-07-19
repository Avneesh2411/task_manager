const fetchJoke = async () => {
  const response = await fetch('https://official-joke-api.appspot.com/random_joke');
  const joke = await response.json();
  return joke;
};

chrome.action.onClicked.addListener((tab) => {
  fetchJoke().then(joke => {
    chrome.tabs.sendMessage(tab.id, {type: "sendJoke", joke: joke});
  });
});