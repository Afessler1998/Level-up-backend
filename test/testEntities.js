const expect = require("chai").expect;

const makeEmailUser = require("../src/entities/email-user/index");
const makeSocialsUser = require("../src/entities/socials-user/index");
const {
  makeWorkout,
  makeExercise,
  makeSet
} = require("../src/entities/workouts/index");
const makeTemplate = require("../src/entities/templates/index");
const makePersonalRecords = require("../src/entities/personal-records/index");

describe("emailUser entity", function () {
  it("Should return an instance of emailUser", function () {
    const email = "abcde@gmail.com";
    const password = "Password1";
    expect(makeEmailUser(email, password, password))
      .to.have.property("id")
      .with.lengthOf(9);
    expect(makeEmailUser(email, password, password)).to.include({
      email,
      password
    });
    expect(makeEmailUser(email, password, password))
      .to.have.nested.property("resetCode.createdAt")
      .to.be.instanceOf(Date);
    expect(makeEmailUser(email, password, password))
      .to.have.nested.property("resetCode.resetCode")
      .that.equals("");
    expect(makeEmailUser(email, password, password)).to.have.nested.property(
      "userSettings.hapticFeedback"
    ).to.be.true;
    expect(makeEmailUser(email, password, password)).to.have.nested.property(
      "userSettings.newPrPopup"
    ).to.be.true;
  });
});

describe("socialsUser entity", function () {
  it("Should return an instance of socialsUser", function () {
    const socialsId = "abcd1234";
    expect(makeSocialsUser(socialsId)).to.have.property("id").with.lengthOf(9);
    expect(makeSocialsUser(socialsId)).to.include({ socialsId });
    expect(makeSocialsUser(socialsId)).to.have.nested.property(
      "userSettings.hapticFeedback"
    ).to.be.true;
    expect(makeSocialsUser(socialsId)).to.have.nested.property(
      "userSettings.newPrPopup"
    ).to.be.true;
  });
});

describe("workout entity", function () {
  it("Should return instance of workout", function () {
    const workoutTitle = "Chest Day";
    const userId = "abcd1234";
    const date = new Date();
    expect(makeWorkout(workoutTitle, date, userId))
      .to.have.property("id")
      .with.lengthOf(9);
    expect(makeWorkout(workoutTitle, date, userId)).to.include({
      workoutTitle,
      userId,
      date
    });
    expect(makeWorkout(workoutTitle, date, userId))
      .to.have.property("exercises")
      .to.be.an("array")
      .with.lengthOf(0);
  });
});

describe("exercise entity", function () {
  it("Should return an instance of exercise", function () {
    const exerciseName = "Bench Press";
    const templateId = "abcd1234";
    expect(makeExercise(exerciseName, templateId))
      .to.have.property("id")
      .with.lengthOf(9);
    expect(makeExercise(exerciseName, templateId)).to.include({
      exerciseName,
      templateId
    });
    expect(makeExercise(exerciseName, templateId))
      .to.have.property("sets")
      .to.be.an("array")
      .with.lengthOf(0);
  });
});

describe("set entity", function () {
  it("Should return an instance of set", function () {
    const isPr = false;
    const setData = {
      weight: 100,
      reps: 10,
      rir: 0
    };
    expect(makeSet(isPr, setData)).to.have.property("id").with.lengthOf(9);
    expect(makeSet(isPr, setData)).to.include({ isPr, ...setData });
  });
});

describe("exercise template entity", function () {
  it("Should return instance of exercise template", function () {
    const exerciseName = "Bench Press";
    const exerciseType = "Strength";
    const dataOptions = {
      distance: false,
      speed: false,
      heartRate: false,
      calories: false,
      duration: false,
      rir: true,
      reps: true,
      weight: true
    };
    const userId = "abcd1234";
    expect(makeTemplate(exerciseName, exerciseType, dataOptions, userId))
      .to.have.property("id")
      .with.lengthOf(9);
    expect(
      makeTemplate(exerciseName, exerciseType, dataOptions, userId)
    ).to.include({ exerciseName, exerciseType, dataOptions, userId });
  });
});

describe("personal records entity", function () {
  it("Should return an instance of personal records", function () {
    const exerciseName = "Bench Press";
    const templateId = "abcd1234";
    const userId = "1234abcd";
    expect(makePersonalRecords(userId, exerciseName, templateId))
      .to.have.property("id")
      .with.lengthOf(9);
    expect(makePersonalRecords(userId, exerciseName, templateId)).to.include({
      exerciseName,
      templateId,
      userId
    });
    expect(makePersonalRecords(userId, exerciseName, templateId))
      .to.have.property("recordTable")
      .to.be.an("array")
      .with.lengthOf(15);
    expect(makePersonalRecords(userId, exerciseName, templateId))
      .to.have.nested.property("recordTable[0].weight")
      .to.equals(0);
    expect(makePersonalRecords(userId, exerciseName, templateId))
      .to.have.nested.property("recordTable[0].date")
      .to.be.instanceOf(Date);
    expect(makePersonalRecords(userId, exerciseName, templateId))
      .to.have.nested.property("recordTable[0].setId")
      .to.equals("");
    expect(makePersonalRecords(userId, exerciseName, templateId))
      .to.have.nested.property("recordTable[0].exerciseId")
      .to.equals("");
  });
});
