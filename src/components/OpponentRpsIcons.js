import React from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { Rps } from '../model/enums';
import rock from '../images/rock.svg';
import paper from '../images/paper.svg';
import scissors from '../images/scissors.svg';
import './OpponentRpsIcons.css';

const OpponentRpsIcons = props => {
  const selectedColor = 'bg-info';
  const defaultColor = 'bg-secondary';

  return (
    <Col>
      <div
        className={
          'OpponentRpsIcons-icon ' +
          (props.selected === Rps.Rock ? selectedColor : defaultColor)
        }
      >
        <img src={rock} className="OpponentRpsIcons-img" alt="rock" />
      </div>
      <div
        className={
          'OpponentRpsIcons-icon ' +
          (props.selected === Rps.Paper ? selectedColor : defaultColor)
        }
      >
        <img src={paper} className="OpponentRpsIcons-img" alt="paper" />
      </div>
      <div
        className={
          'OpponentRpsIcons-icon ' +
          (props.selected === Rps.Scissors ? selectedColor : defaultColor)
        }
      >
        <img src={scissors} className="OpponentRpsIcons-img" alt="scissors" />
      </div>
    </Col>
  );
};

OpponentRpsIcons.propTypes = {
  selected: PropTypes.object
};

export default OpponentRpsIcons;
