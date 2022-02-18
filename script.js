class Animal {
    constructor(isHerbivore, isSleepingNow) {
        this.isHerbivore = isHerbivore;
        this.isSleepingNow = isSleepingNow;
    }
    sleep(hours) {
        console.log(`Спать ${hours} часов`);
    }

    eat(food) {
        console.log(`Есть ${food}`);
    }
}

const animal = new Animal(true, false);

class Cat extends Animal {
    constructor(
        isHerbivore,
        isSleepingNow,
        hasWool,
        woolColor,
        tailLength,
        pawsQty,
        canSwim
    ) {
        super(isHerbivore, isSleepingNow);
        this.hasWool = hasWool;
        this.woolColor = woolColor;
        this.tailLength = tailLength;
        this.pawsQty = pawsQty;
        this.canSwim = canSwim;
    }

    speak() {
        console.log("мяу-мяу");
    }

    swim() {
        console.log("плыть");
    }

    climb(obj) {
        console.log(`лезть по ${obj}`);
    }
}

const cat = new Cat(true, false, true, "grey", 20, 4, true);

console.log(cat);

class HomeCat extends Cat {
    constructor(
        isHerbivore,
        isSleepingNow,
        hasWool,
        woolColor,
        tailLength,
        pawsQty,
        canSwim,
        diet,
        nickname
    ) {
        super(
            isHerbivore,
            isSleepingNow,
            hasWool,
            woolColor,
            tailLength,
            pawsQty,
            canSwim
        );
        this.diet = diet;
        this.nickname = nickname;
    }
    speak() {
        console.log("мур -мур-мур");
    }
}


const homecat = new HomeCat(
    true,
    false,
    true,
    "grey",
    20,
    4,
    true, ["рыба", "корм"],
    "Дуся"
);

class WildCat extends Cat {
    constructor(
        isHerbivore,
        isSleepingNow,
        woolColor,
        tailLength,
        pawsQty,
        canSwim,
        hasWool
    ) {
        super(isHerbivore, isSleepingNow, woolColor, tailLength, pawsQty);
        this.canSwim = canSwim = true;
        this.hasWool = hasWool = true;
    }

    speak() {
        console.log("Рррррр!");
    }
}

const wildcat = new WildCat(true, true, "whitesmoke", 17, 4, true, true);

class CircusCat extends Cat {
    constructor(
        isHerbivore,
        isSleepingNow,
        woolColor,
        tailLength,
        canSwim,
        pawsQty,
        trainerName
    ) {
        super(isHerbivore, isSleepingNow, woolColor, tailLength, canSwim, pawsQty);
        this.trainerName = trainerName;
    }
    salto(Qty) {
        console.log(`${Qty}`);
    }
}

const circuscat = new CircusCat(true, false, "white", 13, true, 4, "Nick");