export class Drug {
    constructor(name, expiresIn, benefit) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }

    update() {
        this.benefitDecrease();
        this.dateDecrease();

        if (this.expiresIn < 0) {
            this.benefitDecrease();
        }
        this.checkBenefit(this.benefit);
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

    benefitDecrease() {
        if (this.benefit > 0)
            this.benefit -= 1;
        else
            this.benefit = 0;
    }
}