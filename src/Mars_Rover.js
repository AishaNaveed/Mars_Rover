function Mars_rover(currentPosition, movement) {
    if (!currentPosition || !movement) throw new Error("input is required");

    let plateau = "5 5";

    let area = new Array(plateau.split(' '));
    let cPosition = new Array(currentPosition.split(' '));
    let charArr = new Array(...movement);

    let maxX = area[0];
    let maxY = area[1];

    let currentX = 0;
    let currentY = 0;
    let currentDirection = "";

    charArr.forEach(item => {
        cPosition = currentPosition.split(' ');
        currentX = cPosition[0];
        currentY = cPosition[1];
        currentDirection = cPosition[2];

        if (item.toString() === "L")
            currentPosition = Left(currentX, currentY, currentDirection);
        else if (item.toString() === "R")
            currentPosition = Right(currentX, currentY, currentDirection);
        else if (item.toString() === "M")
            currentPosition = Forward(maxX, maxY, currentX, currentY, currentDirection);
    });
    return currentPosition;
}

///////left
function Left(currentX, currentY, currentDirection) {
    let newdirection = currentDirection;

    if (currentDirection === "N")
        newdirection = "W";
    else if (currentDirection === "W")
        newdirection = "S";
    else if (currentDirection === "S")
        newdirection = "E";
    else if (currentDirection === "E")
        newdirection = "N";
    return currentX.toString() + " " + currentY.toString() + " " + newdirection;
}

//////////////////////right
function Right(currentX, currentY, currentDirection) {
    let newdirection = currentDirection;

    if (currentDirection === "N")
        newdirection = "E";
    else if (currentDirection === "E")
        newdirection = "S";
    else if (currentDirection === "S")
        newdirection = "W";
    else if (currentDirection === "W")
        newdirection = "N";
    return currentX.toString() + " " + currentY.toString() + " " + newdirection;
}

//////forward
function Forward(maxX, maxY, currentX, currentY, currentDirection) {
    if (currentDirection === "N" || currentDirection === "S") {
        if (currentDirection === "N") {
            if (currentY + 1 <= maxY)
                currentY++;
            // else 
            //     error message
        }
        else if (currentDirection === "S") {
            if (currentY - 1 >= 0)
                currentY--;
            // else 
            //     error message
        }
    }
    else if (currentDirection === "W" || currentDirection === "E") {
        if (currentDirection === "W") {
            if (currentX - 1 >= 0)
                currentX--;
            // else 
            //     error message
        }
        else if (currentDirection === "E") {
            if (currentX + 1 <= maxX)
                currentX++;
            // else 
            //     error message
        }
    }
    return currentX.toString() + " " + currentY.toString() + " " + currentDirection;
}


module.exports = {
    Mars_rover
};