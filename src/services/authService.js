const signIn = (email, _password) => {
  // this is a mock of an API call, in a real app
  // will be need connect with some real API,
  // send email and password, and if credential is corret
  //the API will resolve with some token and another datas as the below
  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: email,
      password: _password,
    }),
  };
  const response = fetch('https://reqres.in/api/login', params)
    .then(response => response.json())
    .then(async responseJson => {
      console.log(responseJson, '===hello');
      // await Keychain.setGenericPassword('Token', responseJson.token);
      // setAuthData(responseJson.token);
      // return responseJson;
    })
    .catch(error => {
      console.error(JSON.stringify(error));
      throw error;
      // return '';
    });
  return response;
};

export const authService = {
  signIn,
};
