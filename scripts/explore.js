// Start and move the pioneers

import * as constants from "./utils/constants.js";
import Character from "./character.js"
import * as controller from "./controller.js";
import {hoverOnChar, hoverOffChar} from "./animations/hoverCharacters.js";
import {moveCharacterUp,moveCharacterDown, moveCharacterLeft, moveCharacterRight} from "./animations/moveCharacters.js";

export async function go(character) {
    while (controller.getTimeAdvancing() && character.alive) {
        let possible_moves = []
        if (character.coords[0] > 0) {
            possible_moves.push(constants.LEFT)
        }
        if (character.coords[0] < 6) {
            possible_moves.push(constants.RIGHT)
        }
        if (character.coords[1] > 0) {
            possible_moves.push(constants.DOWN)
        }
        if (character.coords[1] < 6) {
            possible_moves.push(constants.UP)
        }
        let len = possible_moves.length
        let rand = Math.floor(Math.random() * len)
        let direction = possible_moves[rand]
        //debugger;
        if (direction === constants.LEFT) {
            moveCharacterLeft(character)
            character.coords[0] -= 1
        } else if (direction === constants.RIGHT) {
            moveCharacterRight(character)
            character.coords[0] += 1
        } else if (direction === constants.DOWN) {
            moveCharacterDown(character)
            character.coords[1] -= 1
        } else if (direction === constants.UP) {
            moveCharacterUp(character)
            character.coords[1] += 1
        }
        await new Promise(r => setTimeout(r, 1000));
    }
}

export function checkAlive(character) {
    //debugger;
    let m = controller.getMap();
    let c = character.coords;
    let space_type = m[14 - (character.coords[1])][character.coords[0]]
    let alive = (space_type !== constants.LAVA);
    console.log(character.id + " coords: " + c + " map space: " + space_type + " alive: " + alive);
    return alive;
}

// Create and display a new goblin
export function initGoblin() {
    // Display the goblin at starting spot in this constructor
    let goblin = new Character(
        "goblin",
        controller.getGoblinPop(),
        [Math.floor(constants.MAP_COLUMNS/2), 0],
        true)
    $( goblin.id ).hover( function() {
        hoverOnChar(goblin.id);
    }, function() {
        hoverOffChar(goblin.id)
    });
    controller.addGoblin(goblin);
    go(goblin);
}

export async function explore() {
    while(controller.getTimeAdvancing()) {
        controller.advanceYear();
        let year = controller.getCurrYear()
        $("#curr_year").text(year);
        if (year % 20 == 0) {
            initGoblin();
        }
        await new Promise(r => setTimeout(r, controller.getTimeSpeed()));
    }
}

