function makeSignInEmail(signInEmailService) {
  return async function signInEmail(request) {
    try {
      const { email, password } = request.body;
      const token = await signInEmailService(email, password);
      return {
        statusCode: 200,
        response: token
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeSignInEmail;
