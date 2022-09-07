interface IMakesSound extends AnimalName{
    makeSound: () => string;
}

class Dog implements IMakesSound{
    private _name : string;
    private _type : string;

    constructor(value:string) {
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

    constructor(value : string) {
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

    constructor(value : string) {
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
let zooObject = new Zoo;
zooObject.addAnimal(new Cat('Smokey'));
zooObject.addAnimal(new Dog('Finn'));
zooObject.addAnimal(new Parrot('Henry'));
zooObject.addAnimal(new Penguin('Skipper'));

console.log(zooObject)
const el = <HTMLElement>document.querySelector('#target');
zooObject.animals.forEach((animal) => {
    el.innerHTML += (animal.name + ": " + animal.makeSound() + "<br>");
});
