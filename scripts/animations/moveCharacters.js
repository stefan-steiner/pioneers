// Animation for moving characters

import {checkAlive} from "../explore.js";

export function moveCharacterUp(character) {
    $(character.id).animate({
        top: '-=50',
    }, 200, "linear", function() {
        if (!checkAlive(character)) {
            character.kill();
        }
    });
}

export function moveCharacterDown(character) {
    $(character.id).animate({
        top: '+=50',
    }, 200, "linear", function() {
        if (!checkAlive(character)) {
            character.kill();
        }
    });
}

export function moveCharacterLeft(character) {
    $(character.id).animate({
        left: '-=50',
    }, 200, "linear", function() {
        if (!checkAlive(character)) {
            character.kill();
        }
    });
}

export function moveCharacterRight(character) {
    $(character.id).animate({
        left: '+=50',
    }, 200, "linear", function() {
        if (!checkAlive(character)) {
            character.kill();
        }
    });
}
