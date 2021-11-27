const {
    marsRover,
    runMultipleRovers
} = require("./Mars_Rover");

describe("MarsRover", () => {
    test("will return error if no argument is not passed", () => {
        expect(() => marsRover()).toThrow("input is required");
    });

    test("will return error if one argument is not passed", () => {
        expect(() => marsRover("MLMLMRRRR")).toThrow("input is required");
        expect(() => marsRover("2 4 S")).toThrow("input is required");
    });

    test("return new dimensions of rover", () => {
        expect(marsRover("4 7 W", "RMLMLRLMR")).toBe("3 7 W");
    });
    
    test("return new dimensions of rover", () => {
        expect(marsRover("1 2 N", "LMLMLMLMM")).toBe("1 3 N");
    });

    test("return error message of plateau boundry", () => {
        expect(marsRover("15 15 E", "MLMLMLMM")).toBe("Reached Plateau boundry");
    });

    const otherRoverPositions = [
         "5 15 S",
         "12 9 W",
         "3 10 E",
         "4 3 N"
    ];
    test("rover conflict error with other rovers", () => {
        expect(marsRover("3 3 E", "MMRMMRMRRM", otherRoverPositions)).toBe("Rover conflict occured");
    });

    const roversMovementSet = [
        "5 15 S LMLMLMLMM",
        "12 9 W LMLMLMLMM",
        "3 10 E LMLMLMLMM",
        "4 3 N LMRMLMLMM"
   ];
    test("Run multiple rovers at the same time and check for appropriate output", () => {
        expect(runMultipleRovers(roversMovementSet)).toBe("Reached Plateau boundry");
    });
});
