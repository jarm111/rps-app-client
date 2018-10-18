import {
  API_DOMAIN,
  API_AUTH_GOOGLE_ROUTE,
  API_USER_SCORE_ROUTE
} from './config';

export const getTokenAndBestScore = token => {
  const init = {
    method: 'GET',
    headers: new Headers({
      access_token: token
    })
  };

  return fetch(API_DOMAIN + API_AUTH_GOOGLE_ROUTE, init).then(res =>
    res.json()
  );
};

export const sendBestScore = (score, token) => {
  const init = {
    method: 'PUT',
    body: JSON.stringify({ bestScore: score }),
    headers: new Headers({
      Authorization: 'Bearer ' + token,
      'content-type': 'application/json'
    })
  };

  return fetch(API_DOMAIN + API_USER_SCORE_ROUTE, init);
};
