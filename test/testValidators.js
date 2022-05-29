const expect = require("chai").expect;

const validateDataOptions = require("../src/helpers/validators/validateDataOptions");
const validateDate = require("../src/helpers/validators/validateDate");
const validateEmail = require("../src/helpers/validators/validateEmail");
const validateExerciseName = require("../src/helpers/validators/validateExerciseName");
const validateExerciseType = require("../src/helpers/validators/validateExerciseType");
const validatePassword = require("../src/helpers/validators/validatePassword");
const validateWorkoutTitle = require("../src/helpers/validators/validateWorkoutTitle");

describe("validateDataOptions", function () {
  //Strength options are reps, rpe, weight, and duration which is allowed for both exercise types
  //Cardio options are speed, distance, calories, heartRate, and duration

  it("Should throw error if type is Strength and Cardio options are selected", function () {
    const dataOptions = {
      speed: true,
      distance: false,
      calories: false,
      heartRate: false,
      duration: false,
      reps: false,
      rpe: false,
      weight: false
    };
    expect(validateDataOptions.bind(this, "Strength", dataOptions)).to.throw(
      "At least one of the selected data options is not allowed for Strength exercises"
    );
  });

  it("Should throw error if type is Cardio and Strength options are selected", function () {
    const dataOptions = {
      speed: false,
      distance: false,
      calories: false,
      heartRate: false,
      duration: false,
      reps: true,
      rpe: false,
      weight: false
    };
    expect(validateDataOptions.bind(this, "Cardio", dataOptions)).to.throw(
      "At least one of the selected data options is not allowed for Cardio exercises"
    );
  });

  it("Should throw error if no data options are selected", function () {
    const dataOptions = {
      speed: false,
      distance: false,
      calories: false,
      heartRate: false,
      duration: false,
      reps: false,
      rpe: false,
      weight: false
    };
    expect(validateDataOptions.bind(this, "Strength", dataOptions)).to.throw(
      "At least one data option must be selected"
    );
  });

  it("Should return true if exercise type is Strength and only Strength options are selected", function () {
    const dataOptions = {
      speed: false,
      distance: false,
      calories: false,
      heartRate: false,
      duration: true,
      reps: true,
      rpe: true,
      weight: true
    };
    expect(validateDataOptions("Strength", dataOptions)).to.be.true;
  });

  it("Should return true if exercise type is Cardio and only Cardio options are selected", function () {
    const dataOptions = {
      speed: true,
      distance: true,
      calories: true,
      heartRate: true,
      duration: false,
      reps: false,
      rpe: false,
      weight: false
    };
    expect(validateDataOptions("Cardio", dataOptions)).to.be.true;
  });
});

describe("validateDate", function () {
  it("Should throw an error if invalid date format is passed in", function () {
    const invalidDateOne = true;
    expect(validateDate.bind(this, invalidDateOne)).to.throw("Date is invalid");
    const invalidDateTwo = "abc";
    expect(validateDate.bind(this, invalidDateTwo)).to.throw("Date is invalid");
  });

  it("Should return true if valid date is passed in", function () {
    const validDateOne = Date.now();
    expect(validateDate(validDateOne)).to.be.true;
    const validDateTwo = new Date();
    expect(validateDate(validDateTwo)).to.be.true;
    const validDateThree = "5/30/21";
    expect(validateDate(validDateThree)).to.be.true;
  });
});

describe("validateEmail", function () {
  it("Should throw an error if invalid email is passed in", function () {
    const invalidEmailOne = "abcdef@gmailcom";
    expect(validateEmail.bind(this, invalidEmailOne)).to.throw(
      "Email is invalid"
    );
    const invalidEmailTwo = "abcdefgmail.com";
    expect(validateEmail.bind(this, invalidEmailTwo)).to.throw(
      "Email is invalid"
    );
  });

  it("Should return true if valid email is passed in", function () {
    const validEmail = "abcdef@gmail.com";
    expect(validateEmail(validEmail)).to.be.true;
  });
});

describe("validateExerciseName", function () {
  //valid characters are letters, spaces, and hyphens
  it("Should throw an error if exercise name has invalid characters", function () {
    const invalidExerciseName = "Bench_Press";
    expect(validateExerciseName.bind(this, invalidExerciseName)).to.throw(
      "Exercise name can only contain Letters, spaces, and hyphens"
    );
  });

  it("Should throw an error if exercise name has length greater than 30", function () {
    const invalidExerciseName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    expect(validateExerciseName.bind(this, invalidExerciseName)).to.throw(
      "Exercise name cannot be longer than 30 characters"
    );
  });

  it("Should return true if valid exercise name is passed in", function () {
    const validExerciseNameOne = "Bench-Press";
    expect(validateExerciseName(validExerciseNameOne)).to.be.true;
    const validExerciseNameTwo = "Incline Dumbbell Bench Press";
    expect(validateExerciseName(validExerciseNameTwo)).to.be.true;
  });
});

describe("validateExerciseType", function () {
  it("Should throw an error if anything other than 'Strength' or 'Cardio' is passed in", function () {
    const invalidExerciseType = "Not Strength or Cardio";
    expect(validateExerciseType.bind(this, invalidExerciseType)).to.throw(
      "Exercise type can only be Strength or Cardio"
    );
  });

  it("Should return true if 'Strength' or 'Cardio' is passed in", function () {
    const validExerciseTypeOne = "Strength";
    expect(validateExerciseType(validExerciseTypeOne)).to.be.true;
    const validExerciseTypeTwo = "Cardio";
    expect(validateExerciseType(validExerciseTypeTwo)).to.be.true;
  });
});

describe("validatePassword", function () {
  it("Should throw an error if password is not at least 8 characters long", function () {
    const invalidPassword = "Pass1";
    expect(
      validatePassword.bind(this, invalidPassword, invalidPassword)
    ).to.throw("Password must have at least 8 characters");
  });

  it("Should throw an error if passwords do not match", function () {
    const invalidPassword = "Password1";
    const invalidConfirmPassword = "Password2";
    expect(
      validatePassword.bind(this, invalidPassword, invalidConfirmPassword)
    ).to.throw("Passwords do not match");
  });

  it("Should throw an error if password does not have an uppercase letter", function () {
    const invalidPassword = "password1";
    expect(
      validatePassword.bind(this, invalidPassword, invalidPassword)
    ).to.throw("Password must have an uppercase letter");
  });

  it("Should throw an error if password does not have a lowercase letter", function () {
    const invalidPassword = "PASSWORD1";
    expect(
      validatePassword.bind(this, invalidPassword, invalidPassword)
    ).to.throw("Password must have a lowercase letter");
  });

  it("Should throw an error if password does not have a number", function () {
    const invalidPassword = "Password";
    expect(
      validatePassword.bind(this, invalidPassword, invalidPassword)
    ).to.throw("Password must have a number");
  });

  it("Should return true if valid password is passed in", function () {
    const validPassword = "Password1";
    expect(validatePassword(validPassword, validPassword)).to.be.true;
  });
});

describe("validateWorkoutTitle", function () {
  //valid characters are letters, spaces, and hyphens
  it("Should throw an error if workout title has invalid characters", function () {
    const invalidWorkoutTitle = "Chest_day";
    expect(validateWorkoutTitle.bind(this, invalidWorkoutTitle)).to.throw(
      "Workout title can only contain Letters, spaces, and hyphens"
    );
  });

  it("Should throw an error if workout title has length greater than 30", function () {
    const invalidWorkoutTitle = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    expect(validateWorkoutTitle.bind(this, invalidWorkoutTitle)).to.throw(
      "Workout title cannot be longer than 30 characters"
    );
  });

  it("Should return true if valid workout title is passed in", function () {
    const validWorkoutTitleOne = "Chest-Day";
    expect(validateWorkoutTitle(validWorkoutTitleOne)).to.be.true;
    const validWorkoutTitleTwo = "Cardio day";
    expect(validateWorkoutTitle(validWorkoutTitleTwo)).to.be.true;
  });
});
