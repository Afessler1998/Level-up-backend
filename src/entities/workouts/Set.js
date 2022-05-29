function buildMakeSet(makeId, validateSetData) {
  return function makeSet(isPr, setData) {
    validateSetData(setData);

    const set = {
      id: makeId(),
      isPr,
      ...setData
    };

    return set;
  };
}

module.exports = buildMakeSet;
