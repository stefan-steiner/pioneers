// Class that manages marking a trail

import * as trailMarkings from "../maps/trailMarkings.js";

// Display the best trail and remove the previous best trail if it exists
export function displayBestTrail(newBest, oldBest) {
    console.log("New best trail");
    let prevDirection;
    if (oldBest !== null) {
        prevDirection = null;
        for (const [position, direction] of oldBest.trail.entries()) {
            let coords = position.split(",");
            trailMarkings.changeMarkingVisibility(coords[1], coords[0],  direction, prevDirection,false);
            prevDirection = direction;
        }
    }
    prevDirection = null;
    for (const [position, direction] of newBest.trail.entries()) {
        let coords = position.split(",");
        trailMarkings.changeMarkingVisibility(coords[1], coords[0], direction, prevDirection, true);
        prevDirection = direction;
    }
}