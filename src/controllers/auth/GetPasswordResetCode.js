function makeGetPasswordResetCode(getPasswordResetCodeService) {
  return async function getPasswordResetCode(request) {
    try {
      const { email } = request.body;
      await getPasswordResetCodeService(email);
      return {
        statusCode: 200,
        response: { msg: "Reset code created" }
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeGetPasswordResetCode;
