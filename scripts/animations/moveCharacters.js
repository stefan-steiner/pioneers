// Animation for moving characters and post movement logic

import * as controller from "../mainController.js";
import * as trailMarkings from "../maps/trailMarkings.js";
import * as characterManager from "../characterManager.js";
import * as constants from "../utils/constants.js";

export function moveCharacterUp(character) {
    let oldCoords = [character.coords[0], character.coords[1]];
    character.coords[1] += 1
    $(character.id).animate({
        top: '-=50',
    }, 200, "linear", function() {
        if (!characterManager.checkAlive(character)) {
            character.kill();
        }
        characterManager.checkForFurthestCharacter(character);
        ifBestMarkTrail(character, oldCoords, character.coords, constants.UP);
    });
}

export function moveCharacterDown(character) {
    let oldCoords = [character.coords[0], character.coords[1]];
    character.coords[1] -= 1
    $(character.id).animate({
        top: '+=50',
    }, 200, "linear", function() {
        if (!characterManager.checkAlive(character)) {
            character.kill();
        }
        ifBestMarkTrail(character, oldCoords, character.coords, constants.DOWN);
    });
}

export function moveCharacterLeft(character) {
    let oldCoords = [character.coords[0], character.coords[1]];
    character.coords[0] -= 1
    $(character.id).animate({
        left: '-=50',
    }, 200, "linear", function() {
        if (!characterManager.checkAlive(character)) {
            character.kill();
        }
        ifBestMarkTrail(character, oldCoords, character.coords, constants.LEFT);
    });
}

export function moveCharacterRight(character) {
    let oldCoords = [character.coords[0], character.coords[1]];
    character.coords[0] += 1
    $(character.id).animate({
        left: '+=50',
    }, 200, "linear", function() {
        if (!characterManager.checkAlive(character)) {
            character.kill();
        }
        ifBestMarkTrail(character, oldCoords, character.coords, constants.RIGHT);
    });
}

function ifBestMarkTrail(character, oldCoords, currCoords, direction) {
    if (controller.getBestCharacter() !== null && controller.getBestCharacter().id === character.id) {
        trailMarkings.markLatestTrail(oldCoords, currCoords, direction);
    }
}
