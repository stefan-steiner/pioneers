// Show the trail markings of the best character with this skill

import * as constants from "../utils/constants.js"

// Show marking at this row and column
export function changeMarkingVisibility(row, column, currDirection, prevDirection, visible) {
    let r = constants.MAP_ROWS - row - 1;
    if (prevDirection != null) {
        let dir = oppositeDirection(prevDirection);
        let fromTrailId = '#trailMark-' + r + '-' + column + '-' + dir;
        let fromTrail = $(fromTrailId);
        if (visible) {
            console.log("changing marker id: " + fromTrailId + " to visible");
            fromTrail.css('visibility', 'visible');
        } else {
            console.log("changing marker id: " + fromTrailId + " to hidden");
            fromTrail.css('visibility', 'hidden');
        }
    }
    let markerId = '#trailMark-' + r + '-' + column + '-' + currDirection;
    let marker = $(markerId);
    if (visible) {
        console.log("changing marker id: " + markerId + " to visible");
        marker.css('visibility', 'visible');
    } else {
        console.log("changing marker id: " + markerId + " to hidden");
        marker.css('visibility', 'hidden');
    }
}

// Update the trail for the current best character
export function markLatestTrail(oldCoords, currCoords, direction) {
    let oldRow = constants.MAP_ROWS - oldCoords[1] - 1;
    let oldCol = oldCoords[0];
    let fromTrailId = '#trailMark-' + oldRow + '-' + oldCol + '-' + direction;
    let fromTrail = $(fromTrailId);
    console.log("changing marker id: " + fromTrailId + " to visible");
    fromTrail.css('visibility', 'visible');
    let newRow = constants.MAP_ROWS - currCoords[1] - 1;
    let newCol = currCoords[0];
    let toTrailId = '#trailMark-' + newRow + '-' + newCol + '-' + oppositeDirection(direction);
    let toTrail = $(toTrailId);
    console.log("changing marker id: " + toTrailId + " to visible");
    toTrail.css('visibility', 'visible');
}

// Return opposite direction
function oppositeDirection(direction) {
    switch (direction) {
        case constants.UP:
            return constants.DOWN;
        case constants.DOWN:
            return constants.UP;
        case constants.LEFT:
            return constants.RIGHT;
        case constants.RIGHT:
            return constants.LEFT;
        default:
            console.error("Not a valid direction");
    }
}
