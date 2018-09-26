import React from 'react';
import { Col, Badge } from 'reactstrap';
import PropTypes from 'prop-types';
import { Rps } from '../model/enums';
import rock from '../images/rock.svg';
import paper from '../images/paper.svg';
import scissors from '../images/scissors.svg';
import './OpponentRpsIcons.css';

const OpponentRpsIcons = props => {
  const selectedColor = 'info';
  const defaultColor = 'secondary';

  return (
    <Col>
      <Badge
        color={props.selected === Rps.Rock ? selectedColor : defaultColor}
        className="OpponentRpsIcons-badge"
      >
        <img src={rock} className="OpponentRpsIcons-img" alt="rock" />
      </Badge>
      <Badge
        color={props.selected === Rps.Paper ? selectedColor : defaultColor}
        className="OpponentRpsIcons-badge"
      >
        <img src={paper} className="OpponentRpsIcons-img" alt="paper" />
      </Badge>
      <Badge
        color={props.selected === Rps.Scissors ? selectedColor : defaultColor}
        className="OpponentRpsIcons-badge"
      >
        <img src={scissors} className="OpponentRpsIcons-img" alt="scissors" />
      </Badge>
    </Col>
  );
};

OpponentRpsIcons.propTypes = {
  selected: PropTypes.object
};

export default OpponentRpsIcons;
