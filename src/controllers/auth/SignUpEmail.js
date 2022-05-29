function makeSignUpEmail(signUpEmailService) {
  return async function signUpEmail(request) {
    try {
      const { email, password, confirmPassword } = request.body;
      const newUser = await signUpEmailService(
        email,
        password,
        confirmPassword
      );
      return {
        statusCode: 200,
        response: newUser
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeSignUpEmail;
