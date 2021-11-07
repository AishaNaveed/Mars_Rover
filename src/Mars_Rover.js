
const Mars_rover= (currentPosition, movement, otherRoverPositions) => {
    if (!currentPosition || !movement) throw new Error("input is required");

    const plateau = "15 14";
    const conflictError = "Rover conflict occured";
    const outOfBoundry = "Reached Plateau boundry";

    let area = plateau.split(' ');
    let cPosition = GetRoverPosition(currentPosition);
    let charArr = new Array(...movement);

    let maxX = area[0];
    let maxY = area[1];

    charArr.forEach(item => {
        cPosition = GetRoverPosition(currentPosition);

        if (item.toString() === "L") {
            currentPosition = Left_turn(cPosition);
        }
        else if (item.toString() === "R") {
            currentPosition = right_Turn(cPosition);
        }
        else if (item.toString() === "M") {
            currentPosition = moveForward(maxX, maxY, cPosition, otherRoverPositions);
            if (currentPosition.includes(conflictError)) {
                return currentPosition;
            }
            else if(currentPosition.includes(outOfBoundry)) {
                return currentPosition;
            }
        }
    });
    return currentPosition;
}

////////////right Turn function
const right_Turn = RoverPosition => {
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

///////left turn function
const Left_turn = RoverPosition => {
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

//////////forward movement function
const moveForward = (maxX, maxY, RoverPosition, otherRoverPositions) => {
    const conflictError = "Rover conflict occured";
    const outOfBoundry = "Reached Plateau boundry";

    let position = RoverPosition.split(' ');
    let positionX = position[0];
    let positionY = position[1];
    let direction = position[2];
    
    if (direction === "N" || direction === "S") {
        if (direction === "N") {
            if (parseInt(positionY) + 1 <= maxY) {
                if (!LocationConflict(positionX, parseInt(positionY) + 1, otherRoverPositions)) {
                    positionY++;
                }
                else {
                    return conflictError;
                }
            }
            else {
                return outOfBoundry;
            }
        }
        else if (direction === "S") {
            if (parseInt(positionY) - 1 >= 0) {
                if (!LocationConflict(positionX, parseInt(positionY) - 1, otherRoverPositions)) {
                    positionY--;
                }
                else {
                    return conflictError;
                }
            }
            else {
                return outOfBoundry;
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
                    return conflictError;
                }
            }
            else {
                return outOfBoundry;
            }
        }
        else if (direction === "E") {
            if (parseInt(positionX) + 1 <= maxX) {
                if (!LocationConflict(parseInt(positionX)+1, positionY, otherRoverPositions)) {
                    positionX++;;
                }
                else {
                    return conflictError;
                }
            }
            else {
                return outOfBoundry;
            }
        }
    }
    return positionX.toString() + " " + positionY.toString() + " " + direction;
}

///////////////////Get Rover position
const GetRoverPosition = RoverPosition => {
    let position = RoverPosition.split(' ');
    let positionX = position[0];
    let positionY = position[1];
    let direction = position[2];

    return positionX.toString() + " " + positionY.toString() + " " + direction;
}

//////////////////////Location conflict with other rovers
const LocationConflict = (newX, newY, otherRoverPositions) => {

    let result = false;
    
    if(otherRoverPositions === undefined)
    return result;

    otherRoverPositions.forEach(item => {
        let rover = GetRoverPosition(item);

        let position = rover.split(' ');
        let positionX = position[0];
        let positionY = position[1];
        if (positionX == newX && positionY == newY){
            result = true;
            
        }
    });
    return result;
}

module.exports = {
    Mars_rover
};