import React from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { Rps } from '../utils/enums';
import rock from '../images/rock.svg';
import paper from '../images/paper.svg';
import scissors from '../images/scissors.svg';
import './OpponentRpsIcons.css';

const OpponentRpsIcons = props => {
  const selectedColor = 'bg-info';
  const defaultColor = 'bg-light';
  const images = [rock, paper, scissors];

  const icons = Rps.enums.map((item, index) => (
    <div
      className={
        'OpponentRpsIcons-icon ' +
        (props.selected === item ? selectedColor : defaultColor)
      }
      key={item.key}
    >
      <img
        src={images[index]}
        className="OpponentRpsIcons-img"
        alt={item.key}
      />
    </div>
  ));

  return <Col>{icons}</Col>;
};

OpponentRpsIcons.propTypes = {
  selected: PropTypes.object
};

export default OpponentRpsIcons;
