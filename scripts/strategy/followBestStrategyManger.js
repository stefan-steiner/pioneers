// Exposes utility methods to move in the same direction as the best route

let bestRoute = {}

export function updateBestRoute(route) {
    bestRoute = route;
}

export function getBestRoute() {
    return bestRoute;
}

let topDistance = 0;

export function updateTopDistance(distance) {
    topDistance = distance;
}

export function getTopDistance() {
    return topDistance;
}

