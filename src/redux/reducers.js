import { combineReducers } from 'redux';
import { GameStatus } from '../utils/enums';
import {
  SET_BEST_SCORE,
  SET_CURRENT_SCORE,
  SET_PLAYER_SELECTION,
  SET_OPPONENT_SELECTION,
  SET_ROUND_RESULT,
  SET_IS_AUTHENTICATED,
  SET_TOKEN,
  SET_USERNAME,
  SET_ERROR_MESSAGE
} from './actions';

const initialScore = {
  best: 0,
  current: 0
};

const initialRound = {
  playerSelection: null,
  opponentSelection: null,
  result: GameStatus.Init
};

const initialUser = {
  isAuthenticated: false,
  accessToken: '',
  userName: ''
};

const intialError = {
  message: ''
};

const score = (state = initialScore, action) => {
  switch (action.type) {
    case SET_BEST_SCORE:
      return { ...state, best: action.score };
    case SET_CURRENT_SCORE:
      return { ...state, current: action.score };
    default:
      return state;
  }
};

const round = (state = initialRound, action) => {
  switch (action.type) {
    case SET_PLAYER_SELECTION:
      return { ...state, playerSelection: action.selection };
    case SET_OPPONENT_SELECTION:
      return { ...state, opponentSelection: action.selection };
    case SET_ROUND_RESULT:
      return { ...state, result: action.result };
    default:
      return state;
  }
};

const user = (state = initialUser, action) => {
  switch (action.type) {
    case SET_IS_AUTHENTICATED:
      return { ...state, isAuthenticated: action.state };
    case SET_TOKEN:
      return { ...state, accessToken: action.token };
    case SET_USERNAME:
      return { ...state, userName: action.name };
    default:
      return state;
  }
};

const error = (state = intialError, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return { ...state, message: action.message, id: action.id };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ score, round, user, error });

export default rootReducer;
