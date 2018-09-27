import React from 'react';
import { Badge, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import './ScoreBox.css';

const ScoreBox = props => (
  <Col sm="6" className="py-2">
    <span className="ScoreBox">
      {props.text} <Badge color="secondary">{props.score}</Badge>
    </span>
  </Col>
);

ScoreBox.propTypes = {
  text: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

export default ScoreBox;
