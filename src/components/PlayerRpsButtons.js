import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Rps from '../constants/Rps';

const PlayerRpsButtons = props => {
  const selectedColor = 'info';
  const defaultColor = 'secondary';

  return (
    <div className="row">
      <div className="col">
        <Button
          color={props.selected === Rps.Rock ? selectedColor : defaultColor}
          onClick={() => props.onClick(Rps.Rock)}
        >
          ROCK
        </Button>
        <Button
          color={props.selected === Rps.Paper ? selectedColor : defaultColor}
          onClick={() => props.onClick(Rps.Paper)}
        >
          PAPER
        </Button>
        <Button
          color={props.selected === Rps.Scissors ? selectedColor : defaultColor}
          onClick={() => props.onClick(Rps.Scissors)}
        >
          SCISSORS
        </Button>
      </div>
    </div>
  );
};

PlayerRpsButtons.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.object
};

export default PlayerRpsButtons;
