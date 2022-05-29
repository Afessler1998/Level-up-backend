const expect = require("chai").expect;

const makeId = require("../src/helpers/makeId");
const extractExerciseData = require("../src/helpers/graph-helpers/extractExerciseData");

describe("makeId", function () {
  it("Should return string with length of 9", function () {
    expect(makeId()).to.be.a("string").with.lengthOf(9);
  });
});

describe("Graph-helpers", function () {
  describe("extractExerciseData", function () {
    it(`Should take an array of workouts and an exercise template id,
      and return an array of exercises with the passed in template id
      and a date property matches the workout it came from`, function () {
      const templateId = "123456789";
      const mockWorkouts = [
        {
          date: new Date("5/25/2021"),
          exercises: [
            {
              templateId: "123456789"
            },
            {
              templateId: "987654321"
            }
          ]
        },
        {
          date: new Date("5/28/2021"),
          exercises: [
            {
              templateId: "123456789"
            },
            {
              templateId: "987654321"
            }
          ]
        },
        {
          date: new Date("6/2/2021"),
          exercises: [
            {
              templateId: "123456789"
            },
            {
              templateId: "987654321"
            }
          ]
        }
      ];
      expect(
        extractExerciseData(mockWorkouts, templateId)
      ).to.deep.include.ordered.members([
        {
          templateId: "123456789",
          date: new Date("5/25/2021")
        },
        {
          templateId: "123456789",
          date: new Date("5/28/2021")
        },
        {
          templateId: "123456789",
          date: new Date("6/2/2021")
        }
      ]);
    });
  });
});
