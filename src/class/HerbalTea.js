import { Drug } from "./Drug";

export class HerbalTea extends Drug {
    constructor(expiresIn, benefit) {
        super("Herbal Tea", expiresIn, benefit);
    }

    // Override
    updateBenefitValue() {
        this.benefitUpdate();
        super.dateDecrease();

        if (this.expiresIn < 0) {
            this.benefit += 1;
        }
        super.checkBenefit(this.benefit);
    }

    // Override
    benefitUpdate() {
        this.benefit += 1;
    }
}