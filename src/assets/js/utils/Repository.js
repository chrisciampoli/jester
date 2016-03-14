export default class Repository {
    constructor() {
        this.items = {};
    }

    add(name, item) {
        this.items[name] = item;
    }

    fetch(name) {
        if (typeof this.items[name] === "undefined") {
            return () => console.log(`${name} is not a valid item.`);
        }

        return this.items[name];
    }

    all() {
        return this.items
    }
}
