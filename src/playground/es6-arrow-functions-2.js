//Arguments object - no longer bound with arrow functions

const add = function (a,b) {
    console.log(arguments)
    return a + b;
};
console.log(add(55,1))


//this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    //In methods, i.e here we may not want to use an arrow function. 
    //If we used an arrow function here, it would bind the this object to the parent scope which in this case is Global Object
    //printPlacesLived: function() { old syntax
    printPlacesLived() { //new syntax
        //When we add a function to an object property, the this value is bound to that object
        // console.log(this.name); 
        // console.log(this.cities)


        //A regular anonymous function does not have a this value. We can have a work around where:
        // const that = this
        // this.cities.forEach(function (city) {
        //     console.log(that.name + ' has lived in ' + city); 
        // })

    
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city); 
        // })
        //An arrow function does not bind its own this value
        // const cityMessages = this.cities.map((city) => {
        //     return this.name + " has lived in " + city;
        // });
        // return cityMessages;

        //We can use shorthand syntax for function above
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    
    }
}
const multiplier = {
    //numbers - array of numbers
    numbers : [1,2,3,4],
    //multiplyBy - single number
    multiplyBy : 4,
    multiple () {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
    //multiple - return a new array where the number has been multiplied
}
console.log(user.printPlacesLived());
console.log(multiplier.multiple());