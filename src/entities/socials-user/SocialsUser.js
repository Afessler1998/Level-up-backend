function buildMakeSocialsUser(makeId) {
  return function makeSocialsUser(socialsId) {
    const socialsUser = Object.freeze({
      id: makeId(),
      socialsId,
      userSettings: Object.freeze({
        hapticFeedback: true,
        newPrPopup: true
      })
    });

    return socialsUser;
  };
}

module.exports = buildMakeSocialsUser;
