import { Drug } from "./Drug";

export class MagicPill extends Drug {
    constructor(expiresIn, benefit) {
        super("Magic Pill", expiresIn, benefit);
    }

    // Override
    updateBenefitValue() { }
}