//Setup constructor to take name and age (default is 0)
//getDescription - Gurparkash Singh is 26 year(s) old. 
class Person  {
    constructor(name = 'Anonymous', age = '0') {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I am ${this.name}`
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name,age)
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name,age,homeLocation){
        super(name,age)
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}`
        }

        return greeting
    }
}


//Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Sona Singh. I'm visiting from Philadelphia. --> if home location works
// 2. Hi, I am Sona Singh. 

const me = new Student("Gurparkash Singh",26);
console.log(me.getDescription());

const other = new Student("Matt",12,"Math")
console.log(other.getDescription())

const traveler = new Traveler("Professor", 45)
console.log(traveler.getGreeting())