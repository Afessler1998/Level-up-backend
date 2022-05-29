function validatePassword(password, confirmPassword) {
  const eightOrMoreChars = password.length >= 8;
  const passwordsMatch = password === confirmPassword;
  let containsUppercase = false;
  let containsLowercase = false;
  let containsNumber = false;

  for (let i = 0; i <= password.length - 1; i += 1) {
    const charAtIndex = password[i];
    if (charAtIndex === charAtIndex.toUpperCase() && isNaN(charAtIndex))
      containsUppercase = true;
    if (charAtIndex === charAtIndex.toLowerCase() && isNaN(charAtIndex))
      containsLowercase = true;
    if (!isNaN(charAtIndex)) containsNumber = true;
  }

  if (!eightOrMoreChars)
    throw new Error("Password must have at least 8 characters");
  if (!passwordsMatch) throw new Error("Passwords do not match");
  if (!containsUppercase)
    throw new Error("Password must have an uppercase letter");
  if (!containsLowercase)
    throw new Error("Password must have a lowercase letter");
  if (!containsNumber) throw new Error("Password must have a number");

  const result =
    eightOrMoreChars &&
    passwordsMatch &&
    containsUppercase &&
    containsLowercase &&
    containsNumber;

  return result;
}

module.exports = validatePassword;
