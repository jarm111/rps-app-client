import { GameStatus } from '../model/enums';

export default class ScoreLogic {
  static calculateCurrentScore(currentScore, gameResult) {
    switch (gameResult) {
      case GameStatus.Win:
        return currentScore + 1;
      case GameStatus.Loss:
        return 0;
      case GameStatus.Tie:
        return currentScore;
      default:
        return null;
    }
  }

  static isNewBestScore(currentScore, bestScore) {
    return currentScore > bestScore ? true : false;
  }
}
