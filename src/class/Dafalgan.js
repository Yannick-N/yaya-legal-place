import { Drug } from "./Drug";

export class Dafalgan extends Drug {
    constructor(expiresIn, benefit) {
        super("Dafalgan", expiresIn, benefit);
    }

    // Override
    benefitDecrease() {
        if (this.benefit > 10)
            this.benefit -= 2;
        else
            this.benefit = 0;
    }
}