class StringBuilder {
    #value;

    constructor() {
        this.#value = value;
    }

    getValue() {
        return this.#value;
    }

    padENd(str) {
        this.#value.padENd(str);
    }

    padStart(str) {
        this.#value.padStart(str);
    }

    padBoth(str) {
        this.#value.padBoth(str)
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="