// Exposes utility methods to move randomly

import * as constants from "../utils/constants.js";

// Returns a random valid direction
export function chooseRandomDirection(character) {
    let possibleMoves = [];
    if (character.coords[0] > 0) {
        possibleMoves.push(constants.LEFT);
    }
    if (character.coords[0] < constants.MAP_COLUMNS - 1) {
        possibleMoves.push(constants.RIGHT);
    }
    if (character.coords[1] > 0) {
        possibleMoves.push(constants.DOWN);
    }
    if (character.coords[1] < constants.MAP_ROWS - 1) {
        possibleMoves.push(constants.UP);
    }

    let somewhereNew = trySomewhereNew(character, possibleMoves);
    if (somewhereNew.length > 0) {
        possibleMoves = somewhereNew;
    }
    let len = possibleMoves.length;
    let rand = Math.floor(Math.random() * len);
    return possibleMoves[rand];
}

// Return possible values that would bring the character to a space it has never visited
function trySomewhereNew(character, possibleMoves) {
    let somewhereNew = [];
    for (let i = 0; i < possibleMoves.length; i++) {
        let move = possibleMoves[i];
        let newSpace;
        switch (move) {
            case constants.UP:
                newSpace = character.coords[0].toString() + "," + (character.coords[1] + 1).toString();
                if (!character.trail.has(newSpace)) {
                    somewhereNew.push(constants.UP);
                }
                break;
            case constants.DOWN:
                newSpace = character.coords[0].toString() + "," + (character.coords[1] - 1).toString();
                if (!character.trail.has(newSpace)) {
                    somewhereNew.push(constants.DOWN);
                }
                break;
            case constants.LEFT:
                newSpace = (character.coords[0] - 1).toString() + "," + character.coords[1].toString();
                if (!character.trail.has(newSpace)) {
                    somewhereNew.push(constants.LEFT);
                }
                break;
            case constants.RIGHT:
                newSpace = (character.coords[0] + 1).toString() + "," + character.coords[1].toString();
                if (!character.trail.has(newSpace)) {
                    somewhereNew.push(constants.RIGHT);
                }
                break;
        }
    }
    console.log("possible new moves for character: " + character.id + " are: " + somewhereNew);
    return somewhereNew;
}