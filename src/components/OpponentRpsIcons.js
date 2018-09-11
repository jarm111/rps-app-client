import React from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';

const OpponentRpsIcons = props => {
  const selectedColor = 'info';
  const defaultColor = 'secondary';

  return (
    <div className="row">
      <div className="col">
        <Badge color={props.selected === 'rock' ? selectedColor : defaultColor}>
          ROCK
        </Badge>
        <Badge
          color={props.selected === 'paper' ? selectedColor : defaultColor}
        >
          PAPER
        </Badge>
        <Badge
          color={props.selected === 'scissors' ? selectedColor : defaultColor}
        >
          SCISSORS
        </Badge>
      </div>
    </div>
  );
};

OpponentRpsIcons.propTypes = {
  selected: PropTypes.string
};

export default OpponentRpsIcons;
