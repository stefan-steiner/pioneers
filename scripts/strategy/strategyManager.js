// General strategy utils for the movement algorithms

import {setCurrentStrategy} from "../mainController.js";
import {FOLLOW_BEST_STRATEGY, RANDOM_STRATEGY} from "../utils/constants.js";

let strategyTitle = $("#strategyTitle");

let followTrailCheckbox = $("#followTrailCheckbox");

let trailsStrategyBtn = $("#followTrail");

// Display the follow trails strategy option
export function showTrailsStrategy() {
    trailsStrategyBtn.css('visibility', 'visible');
    strategyTitle.css('visibility', 'visible');
}

// When the follow trails checkbox is clicked set that as the current strategy
trailsStrategyBtn.click(function() {
    if (followTrailCheckbox.is(":checked")){
        console.log("Setting strategy to follow the trail");
        setCurrentStrategy(FOLLOW_BEST_STRATEGY);
    } else {
        console.log("Setting strategy to random");
        setCurrentStrategy(RANDOM_STRATEGY);
    }
});

// Returns the direction to follow the given route
export function chooseFollowRoute(character) {
    console.log(character.id + " following route: " + character.route)
    let currentCoordsString = character.coords[0].toString() + "," + character.coords[1].toString();
    return character.route.get(currentCoordsString);
}
