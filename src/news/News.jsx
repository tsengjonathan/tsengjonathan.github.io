import React, { useState, useEffect } from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import topStories from './data';
import NewsCard from './NewsCard';

function News() {
  const [stories, setStories] = useState([]);
  const [storyCount, setStoryCount] = useState(50);

  useEffect(() => {
    topStories(0, storyCount, (storiesCallback => setStories(storiesCallback)));
  }, [storyCount]);

  return (
    <Container>
      <CardColumns>
        { stories.map((story) => {
          const {
            id, by, score, time, title, url,
          } = story;
          return <NewsCard key={id} id={id} by={by} score={score} time={time} title={title} url={url} />;
        })}
      </CardColumns>
    </Container>
  );
}

export default News;
