function myFunction(myObj) {
    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    };

    delete lion[myObj];
    return lion;

}
console.log(myFunction("roar"));
module.exports = myFunction;