function makeResetPassword(resetPasswordService) {
  return async function resetPassword(request) {
    try {
      const { email, resetCode, password, confirmPassword } = request.body;
      const msg = await resetPasswordService(
        email,
        resetCode,
        password,
        confirmPassword
      );
      return {
        statusCode: 200,
        response: { msg }
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeResetPassword;
