function Mars_rover(currentPosition, movement) {
    if (!currentPosition || !movement) throw new Error("input is required");

    let plateau = "15 14";

    //other rovers position that can be obstacles for moving rover
    let otherRoverPositions = [
         "5 15 S",
         "12 9 W",
         "3 10 E",
         "4 3 N"
    ];

    let area = plateau.split(' ');
    let cPosition = GetRoverPosition(currentPosition);
    let charArr = new Array(...movement);

    let maxX = area[0];
    let maxY = area[1];

    charArr.forEach(item => {
        cPosition = GetRoverPosition(currentPosition);

        if (item.toString() === "L") {
            currentPosition = Left(cPosition);
        }
        else if (item.toString() === "R") {
            currentPosition = Right(cPosition);
        }
        else if (item.toString() === "M") {
            currentPosition = Forward(maxX, maxY, cPosition, otherRoverPositions);
            if (currentPosition.includes("Conflict Error")) {
                return currentPosition;
            }
            else if(currentPosition.includes("Out of Boundry")) {
                return currentPosition;
            }
        }
    });
    return currentPosition;
}

///////left
function Left(RoverPosition) {
    let position = RoverPosition.split(' ');
    let positionX = position[0];
    let positionY = position[1];
    let direction = position[2];

    let newdirection = direction;

    if (direction === "N")
        newdirection = "W";
    else if (direction === "W")
        newdirection = "S";
    else if (direction === "S")
        newdirection = "E";
    else if (direction === "E")
        newdirection = "N";

    return positionX.toString() + " " + positionY.toString() + " " + newdirection;
}

//////////////////////right
function Right(RoverPosition) {
    let position = RoverPosition.split(' ');
    let positionX = position[0];
    let positionY = position[1];
    let direction = position[2];

    let newdirection = direction;

    if (direction === "N")
        newdirection = "E";
    else if (direction === "E")
        newdirection = "S";
    else if (direction === "S")
        newdirection = "W";
    else if (direction === "W")
        newdirection = "N";

    return positionX.toString() + " " + positionY.toString() + " " + newdirection;
}

//////forward
function Forward(maxX, maxY, RoverPosition, otherRoverPositions) {
    let position = RoverPosition.split(' ');
    let positionX = position[0];
    let positionY = position[1];
    let direction = position[2];

    let newdirection = direction;

    if (direction === "N" || direction === "S") {
        if (direction === "N") {
            if (parseInt(positionY) + 1 <= maxY) {
                if (!LocationConflict(positionX, parseInt(positionY) + 1, otherRoverPositions)) {
                    positionY++;
                }
                else {
                    return "Conflict Error";
                }
            }
            else {
                return "Out of Boundry";
            }
        }
        else if (direction === "S") {
            if (parseInt(positionY) - 1 >= 0) {
                if (!LocationConflict(positionX, parseInt(positionY) - 1, otherRoverPositions)) {
                    positionY--;
                }
                else {
                    return "Conflict Error";
                }
            }
            else {
                return "Out of Boundry";
            }
        }
    }
    else if (direction === "W" || direction === "E") {
        if (direction === "W") {
            if (parseInt(positionX) - 1 >= 0) {
                if (!LocationConflict(parseInt(positionX) - 1, positionY, otherRoverPositions)) {
                    positionX--;
                }
                else {
                    return "Conflict Error";
                }
            }
            else {
                return "Out of Boundry";
            }
        }
        else if (direction === "E") {
            if (parseInt(positionX) + 1 <= maxX) {
                if (!LocationConflict(parseInt(positionX)+1, positionY, otherRoverPositions)) {
                    positionX++;;
                }
                else {
                    return "Conflict Error";
                }
            }
            else {
                return "Out of Boundry";
            }
        }
    }
    return positionX.toString() + " " + positionY.toString() + " " + direction;
}

///////////////////Get Rover position
function GetRoverPosition(RoverPosition) {
    let position = RoverPosition.split(' ');
    let positionX = position[0];
    let positionY = position[1];
    let direction = position[2];

    return positionX.toString() + " " + positionY.toString() + " " + direction;
}

//////////////////////Location conflict with other rovers
function LocationConflict(newX, newY, otherRoverPositions) {

    let result = false;
    otherRoverPositions.forEach(item => {
        let rover = GetRoverPosition(item);

        let position = rover.split(' ');
        let positionX = position[0];
        let positionY = position[1];
        if (positionX == newX && positionY == newY)
        {
            result = true;
            
        }
    });
    return result;
}

module.exports = {
    Mars_rover
};