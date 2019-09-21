import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function NewsCard({
  id, by, score, time, title, url,
}) {
  return (
    <Card>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url || `https://news.ycombinator.com/item?id=${id}`}
      >
        <Card.Body>
          <Card.Title>
            {title}
          </Card.Title>
        </Card.Body>
      </a>
    </Card>
  );
}

NewsCard.defaultProps = {
  url: null,
};

NewsCard.propTypes = {
  by: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default NewsCard;
