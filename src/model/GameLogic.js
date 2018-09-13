import Rps from '../constants/Rps';

class GameLogic {
  static calculateRoundResult(playerSelection, opponentSelection) {
    if (playerSelection === opponentSelection) {
      return 'tie';
    }
    if (
      (playerSelection === Rps.Scissors && opponentSelection === Rps.Paper) ||
      (playerSelection === Rps.Paper && opponentSelection === Rps.Rock) ||
      (playerSelection === Rps.Rock && opponentSelection === Rps.Scissors)
    ) {
      return 'win';
    } else {
      return 'loss';
    }
  }

  static drawOpponentSelection() {
    //The maximum is exclusive and the minimum is inclusive
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    };

    return Rps.get(getRandomInt(0, 3));
  }
}

export default GameLogic;
