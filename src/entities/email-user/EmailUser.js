function buildMakeEmailUser(makeId, validateEmail, validatePassword) {
  return function makeEmailUser(email, password, confirmPassword) {
    validateEmail(email);
    validatePassword(password, confirmPassword);

    const emailUser = {
      id: makeId(),
      email,
      password,
      resetCode: {
        createdAt: new Date(),
        resetCode: ""
      },
      userSettings: {
        hapticFeedback: true,
        newPrPopup: true
      }
    };

    return emailUser;
  };
}

module.exports = buildMakeEmailUser;
