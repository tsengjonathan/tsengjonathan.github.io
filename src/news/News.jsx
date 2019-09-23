import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import topStories from './data';
import NewsCard from './NewsCard';

const pagination = 50;

function News() {
  const [stories, setStories] = useState([]);
  const [storyCount, setStoryCount] = useState(pagination);

  useEffect(() => {
    topStories(0, storyCount, (storiesCallback => setStories(storiesCallback)));
  }, []);

  function paginate() {
    const newStoryCount = storyCount + pagination;
    topStories(storyCount, newStoryCount,
      (storiesCallback => setStories(stories.concat(storiesCallback))));
    setStoryCount(newStoryCount);
  }

  return (
    <Container style={{ alignItems: 'center' }}>
      { stories.map((story) => {
        const {
          id, by, score, time, title, url,
        } = story;
        return (
          <NewsCard
            key={id}
            id={id}
            by={by}
            score={score}
            time={time}
            title={title}
            url={url}
          />
        );
      })}
      <Button variant="secondary" onClick={() => paginate()} style={{ width: '20rem' }}>Load more</Button>
    </Container>
  );
}

export default News;
