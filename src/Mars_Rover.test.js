const {
    Mars_rover
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
        expect(Mars_rover("15 15 E", "MLMLMLMM")).toMatch("Out of Boundry");
    });

    test("rover conflict error with other rovers", () => {
        expect(Mars_rover("3 3 E", "MMRMMRMRRM")).toMatch("Conflict Error");
        expect(Mars_rover("3 3 E", "MMRMMRMRRM")).toMatch("Conflict Error");
    });

    test("checking rover function for different string", () => {
        expect(Mars_rover("3 3 E", "MMRMMRMRRM")).toBe("");
    });
});
