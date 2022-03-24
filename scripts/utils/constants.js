// Constants

// Map

export const MAP_COLUMNS = 15;
export const MAP_ROWS = 15;
export const SPACE_SIZE = 50;

export const GRASS = "grass";
export const WHEAT = "wheat";
export const ROCK = "rock";
export const LAVA = "lava";

// Distribution of space types determines how often each appears randomly
export const SPACE_TYPES = [GRASS, GRASS, GRASS, GRASS,
                            WHEAT, WHEAT, WHEAT,
                            ROCK, ROCK, LAVA];

// Movement

export const LEFT = "left"
export const RIGHT = "right"
export const UP = "up"
export const DOWN = "down"

// Strategies

export const RANDOM_STRATEGY = "randomStrategy";
export const FOLLOW_BEST_STRATEGY = "followBestStrategy";

// Skills

export const NO_SKILL = "noSkill";
export const MARK_TRAILS_SKILL = "markTrailsSkill";


// Civilizations

export const WIZARD = "wizard";
export const GOBLIN = "goblin";
export const CIVILIZATIONS = [WIZARD, GOBLIN];