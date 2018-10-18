import React from 'react';
import { Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { Rps } from '../utils/enums';
import rock from '../images/rock.svg';
import paper from '../images/paper.svg';
import scissors from '../images/scissors.svg';
import './PlayerRpsButtons.css';

const PlayerRpsButtons = props => {
  const selectedColor = 'info';
  const defaultColor = 'secondary';
  const images = [rock, paper, scissors];

  const buttons = Rps.enums.map((item, index) => (
    <Button
      color={props.selected === item ? selectedColor : defaultColor}
      onClick={() => props.onClick(item)}
      className="PlayerRpsButtons-button"
      key={item.key}
    >
      <img
        src={images[index]}
        className="PlayerRpsButtons-img"
        alt={item.key}
      />
    </Button>
  ));

  return <Col>{buttons}</Col>;
};

PlayerRpsButtons.propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.object
};

export default PlayerRpsButtons;
