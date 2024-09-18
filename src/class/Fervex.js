import { Drug } from "./Drug";

export class Fervex extends Drug {
    constructor(expiresIn, benefit) {
        super("Fervex", expiresIn, benefit);
    }

    // Override
    updateBenefitValue() {
        this.benefitUpdate();
        super.dateDecrease();
        this.benefitToZero();
        super.checkBenefit(this.benefit)
    }

    // Override
    benefitUpdate() {
        this.benefit += 1;

        if (this.expiresIn <= 10) {
            this.benefit += 1;
        }
        if (this.expiresIn <= 5) {
            this.benefit += 1;
        }
    }

    benefitToZero() {
        if (this.expiresIn < 0) {
            this.benefit = 0;
        }
    }
}