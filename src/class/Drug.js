export class Drug {
    constructor(name, expiresIn, benefit) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }

    updateBenefitValue() {
        this.benefitUpdate();
        this.dateDecrease();
        this.increaseTwice();
        this.checkBenefit(this.benefit);
    }

    increaseTwice() {
        if (this.expiresIn < 0) {
            this.benefitUpdate();
        }
    }

    checkBenefit(benefit) {
        if (benefit > 50)
            this.benefit = 50;
        else
            this.benefit = benefit;
    }

    dateDecrease() {
        this.expiresIn -= 1;
    }

    benefitUpdate() {
        if (this.benefit > 0)
            this.benefit -= 1;
        else
            this.benefit = 0;
    }
}