function validateEmail(email) {
  //ensures email follows _@_._ structure
  const validator = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  const result = validator.test(email);
  if (!result) throw new Error("Email is invalid");
  return result;
}

module.exports = validateEmail;
