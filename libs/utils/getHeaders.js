export default (accessToken) => {
  if (accessToken) {
    return {
      'content-type': 'application/json',
      Authorization: `Token ${accessToken}`,
    };
  }
  return {
    'content-type': 'application/json',
  };
};
