import React from 'react';
import { Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Rps } from '../model/enums';
import rock from '../images/rock.svg';
import paper from '../images/paper.svg';
import scissors from '../images/scissors.svg';
import './PlayerRpsButtons.css';

const PlayerRpsButtons = props => {
  const selectedColor = 'info';
  const defaultColor = 'secondary';

  return (
    <Col>
      <Button
        color={props.selected === Rps.Rock ? selectedColor : defaultColor}
        onClick={() => props.onClick(Rps.Rock)}
        className="Rps-button"
      >
        <img src={rock} className="Rps-icon" alt="rock" />
      </Button>
      <Button
        color={props.selected === Rps.Paper ? selectedColor : defaultColor}
        onClick={() => props.onClick(Rps.Paper)}
        className="Rps-button"
      >
        <img src={paper} className="Rps-icon" alt="paper" />
      </Button>
      <Button
        color={props.selected === Rps.Scissors ? selectedColor : defaultColor}
        onClick={() => props.onClick(Rps.Scissors)}
        className="Rps-button"
      >
        <img src={scissors} className="Rps-icon" alt="scissors" />
      </Button>
    </Col>
  );
};

PlayerRpsButtons.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.object
};

export default PlayerRpsButtons;
