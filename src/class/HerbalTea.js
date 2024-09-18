import { Drug } from "./Drug";

export class HerbalTea extends Drug {
    constructor(expiresIn, benefit) {
        super("Herbal Tea", expiresIn, benefit);
    }

    // Override
    update() {
        this.benefit += 1;

        this.expiresIn -= 1;

        if (this.expiresIn < 0) {
            this.benefit += 1;
        }
    }
}