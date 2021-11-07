const {
    Mars_rover, 
    runMultipleRovers
} = require("./Mars_Rover");

describe("MarsRover", () => {
    test("will return error if the argument is not passed", () => {
        expect(() => Mars_rover()).toThrow("input is required");
        expect(() => Mars_rover("MLMLMRRRR")).toThrow("input is required");
        expect(() => Mars_rover("2 4 S")).toThrow("input is required");
    });

    test("return new dimensions of rover", () => {
        expect(Mars_rover("1 2 N", "LMLMLMLMM")).toBe("1 3 N");
        expect(Mars_rover("4 7 W", "RMLMLRLMR")).toBe("3 7 W");
    });

    test("return error message of plateau boundry", () => {
        expect(Mars_rover("15 15 E", "MLMLMLMM")).toBe("Reached Plateau boundry");
    });

    const otherRoverPositions = [
         "5 15 S",
         "12 9 W",
         "3 10 E",
         "4 3 N"
    ];

    test("rover conflict error with other rovers", () => {
        expect(Mars_rover("3 3 E", "MMRMMRMRRM", otherRoverPositions)).toBe("Rover conflict occured");
    });

    const roversMovementSet = [
        "5 15 S LMLMLMLMM",
        "12 9 W LMLMLMLMM",
        "3 10 E LMLMLMLMM",
        "4 3 N LMRMLMLMM"
   ];
    test("rover conflict error with other rovers", () => {
        expect(runMultipleRovers(roversMovementSet)).toBe("Reached Plateau boundry");
    });
});
