const callTypes = [
    {
        id: 0,
        name: `Free (1 Call)`,
        cost: 0,
        keep: 1
    },
    {
        id: 1,
        name: `Free (5 Call)`,
        cost: 0,
        keep: 1
    },
    {
        id: 2,
        name: `Get 1 Survivor`,
        cost: 1,
        keep: 1
    },
    {
        id: 3,
        name: `Choose From 2`,
        cost: 5,
        keep: 1
    },
    {
        id: 4,
        name: `Choose from 3`,
        cost: 15,
        keep: 1
    },
    {
        id: 5,
        name: `Choose from 3 (2x)`,
        cost: 15,
        keep: 1
    },
    {
        id: 6,
        name: `Keep All 3`,
        cost: 40,
        keep: 3
    },
    {
        id: 7,
        name: `Keep All 3 (2x)`,
        cost: 40,
        keep: 3
    },
    {
        id: 8,
        name: `Keep All 3 (3x)`,
        cost: 40,
        keep: 3
    }
];

const survivors = [
    {
        id: 1,
        name: `Assault`,
        type: 0,
    },
    {
        id: 2,
        name: `Bruiser`,
        type: 0,
    },
    {
        id: 3,
        name: `Hunter`,
        type: 0,
    },
    {
        id: 4,
        name: `Scout`,
        type: 0,
    },
    {
        id: 5,
        name: `Shooter`,
        type: 0,
    },
    {
        id: 6,
        name: `Warrior`,
        type: 0,
    },
    {
        id: 7,
        name: `Aaron`,
        type: 1,
    },
    {
        id: 8,
        name: `Abraham`,
        type: 1,
    },
    {
        id: 9,
        name: `Alpha`,
        type: 1,
    },
    {
        id: 10,
        name: `Carl`,
        type: 1,
    },
    {
        id: 11,
        name: `Carol`,
        type: 1,
    },
    {
        id: 12,
        name: `Daryl`,
        type: 1,
    },
    {
        id: 13,
        name: `Daryl (Huntsman)`,
        type: 2,
    },
    {
        id: 14,
        name: `Dwight`,
        type: 1,
    },
    {
        id: 15,
        name: `Eugene`,
        type: 1,
    },
    {
        id: 16,
        name: `Ezekiel`,
        type: 1,
    },
    {
        id: 17,
        name: `Gabriel`,
        type: 1,
    },
    {
        id: 18,
        name: `Glenn`,
        type: 1,
    },
    {
        id: 19,
        name: `Glenn (Riot Gear)`,
        type: 2,
    },
    {
        id: 20,
        name: `Governor`,
        type: 1,
    },
    {
        id: 21,
        name: `Jerry`,
        type: 1,
    },
    {
        id: 22,
        name: `Jesus`,
        type: 1,
    },
    {
        id: 23,
        name: `Maggie`,
        type: 1,
    },
    {
        id: 24,
        name: `Maggie (Hilltop)`,
        type: 2,
    },
    {
        id: 25,
        name: `Merle`,
        type: 1,
    },
    {
        id: 26,
        name: `Michonne`,
        type: 1,
    },
    {
        id: 27,
        name: `Morgan`,
        type: 1,
    },
    {
        id: 28,
        name: `Morgan (Sniper)`,
        type: 2,
    },
    {
        id: 29,
        name: `Negan`,
        type: 1,
    },
    {
        id: 30,
        name: `Rick`,
        type: 1,
    },
    {
        id: 31,
        name: `Rick (Survivalist)`,
        type: 2,
    },
    {
        id: 32,
        name: `Rosita`,
        type: 1,
    },
    {
        id: 33,
        name: `Rufus`,
        type: 1,
    },
    {
        id: 34,
        name: `Sasha`,
        type: 1,
    },
    {
        id: 35,
        name: `Tara`,
        type: 1,
    }
];

const survivorTypes = {
    0: `Survivor`,
    1: `Hero`,
    2: `Special Hero`
}

export { callTypes, survivors, survivorTypes };