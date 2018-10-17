export const getTokenAndBestScore = token => {
  const init = {
    method: 'GET',
    headers: new Headers({
      access_token: token
    })
  };

  return fetch('http://localhost:5000/user/auth/google', init).then(res =>
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

  return fetch('http://localhost:5000/user/score/', init);
};
