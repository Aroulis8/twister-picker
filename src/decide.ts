const colors = {
    red: '#df3737',
    green: '#46e440',
    blue: '#379fdf',
    yellow: '#dfc937',
    purple: '#b537df',
}

export function decideColor(): string {
    switch (Math.floor(Math.random() * 6)) {
        case 0:
            return colors.red;
        case 1:
            return colors.green;
        case 2:
            return colors.blue;
        case 3:
            return colors.yellow;
        case 4:
            return colors.purple;
        default:
            return colors.red
    }
}

export function decideLimb(): boolean {
    if (Math.floor(Math.random() * 2) === 0) {
        return true;
    } else {
        return false;
    }
}

export function decideDirection(): string {
    if (Math.floor(Math.random() * 2) === 0) {
        return "Left";
    } else {
        return "Right";
    }
}