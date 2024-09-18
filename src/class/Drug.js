export class Drug {
    constructor(name, expiresIn, benefit) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }

    update() {
        if (this.benefit > 50) {
            this.benefit = 50;
        }

        if (this.benefit > 0) {
            this.benefit -= 1;
        } else
            this.benefit = 0;

        this.expiresIn -= 1;

        if (this.expiresIn < 0 && this.benefit > 0) {
            this.benefit -= 1;
        }

    }
}