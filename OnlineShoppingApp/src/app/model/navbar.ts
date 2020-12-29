export interface Sub {
    name: string;
}

export interface Submenu {
    name: string;
    sub: Sub[];
}

export interface Item {
    item: string;
    Submenu: Submenu[];
}

export interface navbar {
    items: Item[];
}



