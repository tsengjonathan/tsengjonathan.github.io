const hackerNews = 'https://hacker-news.firebaseio.com/v0';

async function fetchItem(id) {
  const response = await fetch(`${hackerNews}/item/${id}.json`);
  return response.json();
}

function getTopStories(startIdx = 0, endIdx = 50, callback) {
  fetch(`${hackerNews}/topstories.json`)
    .then(response => response.json())
    .then(json => json.slice(startIdx, endIdx))
    .then(ids => ids.map(id => fetchItem(id)))
    .then(promises => Promise.all(promises))
    .then(stories => callback(stories));
}

export default getTopStories;
