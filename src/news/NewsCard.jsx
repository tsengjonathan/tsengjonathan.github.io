import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import moment from 'moment';

function NewsCard({
  id, by, score, time, title, url,
}) {
  const momentTime = moment.unix(time);
  return (
    <Card style={{ width: '100%' }}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={url || `https://news.ycombinator.com/item?id=${id}`}
      >
        <Card.Body>
          <Card.Title>
            {title}
          </Card.Title>
          <Card.Subtitle className="text-muted" style={{ fontSize: '0.875rem' }}>
            {`${score} points ${by} ${momentTime.fromNow()}`}
          </Card.Subtitle>
        </Card.Body>
      </a>
    </Card>
  );
}

NewsCard.defaultProps = {
  url: null,
};

NewsCard.propTypes = {
  id: PropTypes.number.isRequired,
  by: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default NewsCard;
