// Show the trail markings of the best character with this skill

import * as constants from "../utils/constants.js"

// Show marking at this row and column
export function changeMarkingVisibility(row, column, visibile) {
    let r = constants.MAP_ROWS - row - 1;
    let markerId = '#trailMark-' + r + '-' + column;
    let marker = $(markerId);
    if (visibile) {
        console.log("changing marker id: " + markerId + " to visible");
        marker.css('visibility', 'visible');
    } else {
        console.log("changing marker id: " + markerId + " to hidden");
        marker.css('visibility', 'hidden');
    }
}