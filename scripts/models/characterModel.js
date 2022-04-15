// Character class

import * as constants from "../utils/constants.js";
import * as controller from "../mainController.js";

export default class Character {
    constructor(class_name, population, coords, alive, strategy, skill) {
        this.class_name = class_name;
        this.id = '#' + class_name + population.toString();
        this.coords = coords;
        this.alive = alive;
        this.strategy = strategy;
        this.route = null;
        this.setRoute();
        this.skill = skill

        this.trail = new Map();
        this.maxRow = 0;

        $('<div/>',{
            id: class_name + population.toString(),
            class: this.class_name,
        }).appendTo('#starting-spot');

    }

    kill() {
        this.alive = false;
        $(this.id).css('background-color', 'darkred');
    }

    // Route is a set of instructions of where to go retrieved from another character's trail
    setRoute() {
        if (this.strategy === constants.FOLLOW_BEST_STRATEGY) {
            this.route = controller.getBestCharacter().trail;
            console.log("Setting route for goblin: " + this.id + " as: " + this.route);
        }
    }

    // Trail is a map of the previous spaces visited by a character and the direction they took from there
    // Example: {'0,7': 'left', '0,6: 'up'}
    addToTrail(coords, direction) {
        this.trail.set(this.coords[0].toString() + ',' + this.coords[1].toString(), direction);
    }



}