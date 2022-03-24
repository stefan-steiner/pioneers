// Animation for moving characters and post movement logic

import * as controller from "../mainController.js";
import * as trailMarkings from "../maps/trailMarkings.js";
import * as characterManager from "../characterManager.js";

export function moveCharacterUp(character) {
    character.coords[1] += 1
    $(character.id).animate({
        top: '-=50',
    }, 200, "linear", function() {
        if (!characterManager.checkAlive(character)) {
            character.kill();
        }
        characterManager.checkForFurthestCharacter(character);
        ifBestMarkTrail(character);
    });
}

export function moveCharacterDown(character) {
    character.coords[1] -= 1
    $(character.id).animate({
        top: '+=50',
    }, 200, "linear", function() {
        if (!characterManager.checkAlive(character)) {
            character.kill();
        }
        ifBestMarkTrail(character);
    });
}

export function moveCharacterLeft(character) {
    character.coords[0] -= 1
    $(character.id).animate({
        left: '-=50',
    }, 200, "linear", function() {
        if (!characterManager.checkAlive(character)) {
            character.kill();
        }
        ifBestMarkTrail(character);
    });
}

export function moveCharacterRight(character) {
    character.coords[0] += 1
    $(character.id).animate({
        left: '+=50',
    }, 200, "linear", function() {
        if (!characterManager.checkAlive(character)) {
            character.kill();
        }
        ifBestMarkTrail(character);
    });
}

function ifBestMarkTrail(character) {
    if (controller.getBestCharacter() !== null && controller.getBestCharacter().id === character.id) {
        trailMarkings.changeMarkingVisibility(character.coords[1], character.coords[0], true);
    }
}
