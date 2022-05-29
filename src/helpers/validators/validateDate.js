function validateDate(date) {
  let isValid = false;
  let result;
  if (typeof date === "string") {
    result = Date.parse(date);
    if (isNaN(result)) throw new Error("Date is invalid");
    isValid = true;
  } else if (typeof date === "number" || date instanceof Date) {
    result = new Date(date);
    if (result === "Invalid Date") throw new Error("Date is invalid");
    isValid = true;
  } else {
    throw new Error("Date is invalid");
  }
  return isValid;
}

module.exports = validateDate;
