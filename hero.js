class Hero {
    constructor(name, heroFront, heroLeft, heroRight) {
        this.name = name;
        this.heroFront = heroFront;
        this.heroLeft = heroLeft;
        this.heroRight = heroRight;
        this.top = 545;
        this.left = 383;
        this.createHero();
    }

    createHero() {
        let heroContain = document.querySelector('.bgImg');
        this.heroBox = document.createElement('div');
        this.heroBox.className = 'heroImg';
        this.heroBox.style.top = this.top + 'px';
        this.heroBox.style.left = this.left + 'px';
        this.heroBox.style.backgroundPosition = this.heroFront;
        heroContain.appendChild(this.heroBox);
    }

    moveStopHero() {
        this.heroBox.style.backgroundPosition = this.heroFront;
    }

    leftHero() {
        this.left = this.left - 20;
        this.heroBox.style.left = this.left + 'px';
        this.heroBox.style.backgroundPositionX = '70px';
        this.heroBox.style.backgroundPosition = this.left;
    }

    rightHero() {
        this.left =  this.left + 20;
        this.heroBox.style.left = this.left + 'px';
        this.heroBox.style.backgroundPositionX = '-104px';
        this.heroBox.style.backgroundPosition = this.right;
    }
}

let heroNamed = new Hero('heroNamed', '0px 0px', '- 35px 0px', '-70 0px', '-105px 0px');

document.addEventListener('keydown', function(e) {
    if(e.keyCode === 37 && heroNamed.left > 10) {
        heroNamed.leftHero();
    } else if(e.keyCode === 39 && heroNamed.left < 750) {
        heroNamed.rightHero();
    }
})

document.addEventListener('keyup', function(e) {
    heroNamed.moveStopHero();
})