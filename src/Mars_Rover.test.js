const {
    Mars_rover
} = require("./Mars_Rover");

describe("MarsRover", () => {
    test("will return error if the argument is not passed", () => {
        expect(() => Mars_rover()).toThrow("input is required");
        expect(() => Mars_rover("MLMLMRRRR")).toThrow("input is required");
    });

    test("return new dimensions of rover", () => {
        expect(Mars_rover("1 2 N", "LMLMLMLMM")).toBe("1 1 N");
        expect(Mars_rover("3 3 E", "MMRMMRMRRM")).toBe("5 1 E");
        expect(Mars_rover("4 7 W", "RMLMLRLMR")).toBe("3 6 W");
    });

    test("return message of plateau boundry", () => {
        expect(Mars_rover("1 2 N", "LMLMLMLMM")).toBe("1 1 N");
        expect(Mars_rover("3 3 E", "MMRMMRMRRM")).toBe("5 1 E");
        expect(Mars_rover("4 7 W", "RMLMLRLMR")).toBe("3 6 W");
    });
});
