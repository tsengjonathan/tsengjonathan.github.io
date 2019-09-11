const hackerNews = 'https://hacker-news.firebaseio.com/v0';

function fetchItem(id) {
  fetch(`${hackerNews}/item/${id}.json`)
    .then(response => response.json());
}

// Prefetch the top story ids and keep in memory
// We may want to load the first 50 stories, but load more on scroll
const topStoryIds = fetch(`${hackerNews}/topstories.json`)
  .then(response => response.json())
  .catch(error => console.error(error));

function getTopStories(startIdx = 0, endIdx = 50) {
  console.log(topStoryIds);
  const ids = topStoryIds.slice(startIdx, endIdx);
  const topStories = ids.array.forEach((id) => {
    console.log(fetchItem(id));
  });
}

export default getTopStories;
