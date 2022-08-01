interface IMakesSound {
    makeSound: () => string;
}

class Dog implements IMakesSound{
    private _name : string;
    private _type : string;

    constructor(value) {
        this._name = value;
        this._type = 'dog';
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() : string {
        return 'woef woef'
    }
}

class Cat implements IMakesSound {

    private _name : string;
    private _type : string;

    constructor(value) {
        this._name = value;
        this._type = 'cat';
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() : string {
        return 'Miauw miauw'
    }
}

class Parrot implements IMakesSound {
    private _name : string;
    private _type : string;

    constructor(value) {
        this._name = value;
        this._type = 'parrot';
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() : string {
        return 'I am a pirate'
    }
}

class Penguin implements IMakesSound {
    private _name : string;
    private _type : string;

    constructor(value) {
        this._name = value;
        this._type = 'penguin';
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() : string {
        return 'krrwaarwkk'
    }
}

class Bear implements IMakesSound {
    private _name : string;
    private _type : string;

    constructor(value) {
        this._name = value;
        this._type = 'Bear';
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() : string {
        return 'raawrrr'
    }
}

class Zoo {
    private _animals : Array<Object> = new Array<Object>();

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat('Smokey'));
zoo.addAnimal(new Dog('Finn'));
zoo.addAnimal(new Parrot('Henry'));
zoo.addAnimal(new Penguin('Skipper'));

console.log(zoo)
const el = <HTMLElement>document.querySelector('#target');
zoo.animals.forEach((animal) => {
    el.innerHTML += (animal.name + ": " + animal.makeSound() + "<br>");
});
