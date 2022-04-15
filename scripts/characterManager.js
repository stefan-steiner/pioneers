// Start and move the pioneers

import * as constants from "./utils/constants.js";
import * as controller from "./mainController.js";
import * as randomStrategyManager from "./strategy/randomStrategyManager.js";
import * as strategyManager from "./strategy/strategyManager.js";
import * as markTrailsSkillManager from "./skill/markTrailsSkillManager.js";
import * as hoverCharacters from "./animations/hoverCharacters.js";
import * as moveCharacters from "./animations/moveCharacters.js";
import * as followBestStrategyManger from "./strategy/followBestStrategyManger.js";

import Character from "./models/characterModel.js"

// The loop that advances each character every turn and checks conditions: ex.death, new best
export async function go(character) {
    while (controller.getTimeAdvancing() && character.alive) {
        let direction;
        if (character.strategy === constants.RANDOM_STRATEGY) {
            direction = randomStrategyManager.chooseRandomDirection(character);
        } else if (character.strategy === constants.FOLLOW_BEST_STRATEGY) {
            direction = strategyManager.chooseFollowRoute(character, followBestStrategyManger.getBestRoute())
        }
        character.addToTrail(character.coords, direction);

        if (direction === constants.LEFT) {
            moveCharacters.moveCharacterLeft(character)
        } else if (direction === constants.RIGHT) {
            moveCharacters.moveCharacterRight(character)
        } else if (direction === constants.DOWN) {
            moveCharacters.moveCharacterDown(character)
        } else if (direction === constants.UP) {
            moveCharacters.moveCharacterUp(character)
        }

        await new Promise(r => setTimeout(r, 1000));
    }
}

// See if there is a new best character and set the best
export function checkForFurthestCharacter(character) {
    // Only characters with mark trails skill can be the furthest
    if (character.skill === constants.MARK_TRAILS_SKILL && character.coords[1] > character.maxRow) {
        character.maxRow = character.coords[1];
        if (character.maxRow > controller.getBestRow()) {
            controller.setBestRow(character.maxRow);
            if (controller.getBestCharacter() === null || controller.getBestCharacter().id !== character.id) {
                let oldBest = controller.getBestCharacter();
                console.log("New best character: " + character.id);
                controller.setBestCharacter(character);
                markTrailsSkillManager.displayBestTrail(character, oldBest);
            }
        }
    }
}

// See if a character is alive or has died
export function checkAlive(character) {
    let m = controller.getMap();
    let space_type = m[14 - (character.coords[1])][character.coords[0]]
    return space_type !== constants.LAVA;
}

// Create and display a new character
export function initGoblin() {
    // Display the goblin at starting spot in this constructor
    let strategy = controller.getCurrentStrategy()
    let skill = controller.getCurrentSkill()

    console.log("new goblin created with strategy: " + strategy + " and skill: " + skill);
    let goblin = new Character(
        "goblin",
        controller.getGoblinPop(),
        [Math.floor(constants.MAP_COLUMNS/2), 0],
        true,
        strategy,
        skill);
    let goblinElement = $( goblin.id );
    goblinElement.css('background-color', chooseColor());
    goblinElement.hover( function() {
        hoverCharacters.hoverOnChar(goblin.id);
    }, function() {
        hoverCharacters.hoverOffChar(goblin.id);
    });
    controller.addGoblin(goblin);
    go(goblin);
}

// Pick character color based on selected civilization
export function chooseColor() {
    switch (controller.getCivilization()) {
        case constants.WIZARD:
            return 'blue';
        case constants.GOBLIN:
            return 'forestgreen';
    }
}
