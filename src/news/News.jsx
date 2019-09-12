import React, { useState } from 'react';
import topStories from './data';

function News() {
  const [stories, setStories] = useState([]);
  topStories(0, 50, (storiesCallback => setStories(storiesCallback)));
  console.log(stories);
  return <div />;
}

export default News;
