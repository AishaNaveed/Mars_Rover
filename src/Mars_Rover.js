const conflictError = "Rover conflict occured";
const outOfBoundry = "Reached Plateau boundry";

//////////////run multiple rovers at the same time and check for conflicts or boundry
const runMultipleRovers= (roversMovementInstructions) =>{
    if(roversMovementInstructions === undefined){
        return "Invalid input";
    }

    let roverPositions = [];
    roverPositions = roversMovementInstructions;
    
    for (let i=0; i<roversMovementInstructions.length; i++) {        
         const cRoverInstructions = roversMovementInstructions[i].split(' ');
         let upDatedPosition = Mars_rover(
             cRoverInstructions[0].toString() + " " + cRoverInstructions[1].toString() + " " + cRoverInstructions[2].toString(),
             cRoverInstructions[3], roverPositions)

         if(!isNaN(upDatedPosition.split(' ')[0])){
             // rover movement is successful, now we can update location
             console.log(roversMovementInstructions[i].split(' '));
             roverPositions.shift();
             roverPositions.push(upDatedPosition + " " + cRoverInstructions[3]);
         }
         else{
             return upDatedPosition;

         }
    }
}

const Mars_rover= (currentPosition, movement, otherRoverPositions) => {
    if (!currentPosition || !movement) throw new Error("input is required");

    const plateau = "15 14";
    
    let area = plateau.split(' ');
    let cPosition = GetRoverPosition(currentPosition);
    let charArr = new Array(...movement);

    let maxX = area[0];
    let maxY = area[1];

    charArr.forEach(item => {
        cPosition = GetRoverPosition(currentPosition);

        if (item.toString() === "L") {
            currentPosition = leftTurn(cPosition);
        }
        else if (item.toString() === "R") {
            currentPosition = rightTurn(cPosition);
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
const rightTurn = RoverPosition => {
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
const leftTurn = RoverPosition => {
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
    Mars_rover,
    runMultipleRovers
};