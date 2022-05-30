// Create a Vehicle class 

class Vehicle {
    constructor(color, model, year, motor){
        this.color = color;
        this.model = model;
        this.year = year ;
        this.motor = motor;
    }

    description(){
        console.log(`Ce véhicule de couleur ${this.color} est une ${this.model} de ${this.year} avec une motorisation ${this.motor}`);
    }
};

// class Car héritant de Vehicle

class Car extends Vehicle {
    constructor(color, model, year, motor){
        super(color, model, year, motor);
    }

    description(){
        console.log(`Cette voiture de couleur ${this.color} est une ${this.model} de ${this.year} avec une motorisation ${this.motor}`);
    }
};

// Class Moto héritant de Vehicle

class Moto extends Vehicle {
    constructor(color, model, year, motor){
        super(color, model, year, motor);
    }

    description(){
        console.log(`Cette moto de couleur ${this.color} est une ${this.model} de ${this.year} avec une motorisation ${this.motor}`);
    }
};

// je crée une instance myCar et une myMoto

const myCar = new Car("Grise", "Peugeot 206", "2005", "essence");
myCar.description();

const myMoto = new Moto("Noire", "Triumph", "2018", "essence");
myMoto.description();