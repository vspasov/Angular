class DiselEngine{
    constructor(hp){
        this.hp = hp;
        this.start = false;
    }
}
class HybridEngine{
    constructor(hp){
        this.hp = hp;
        this.start = false;
        
    }
}
class Car{
    constructor(color, year, engine){
        this.color = color;
        this.year = year;
        this.engine = engine
        // this.start = this.start
    }
    start(){
        this.engine.start = true;
    }
}

engine1 = new DiselEngine(100)
engine2 = new HybridEngine(50)


let car1 = new Car("yellow", 2003, engine1);
let car2 = new Car("green", 2018, engine2);

console.log( car1 )
console.log( car2 )

car1.start()
car2.start()