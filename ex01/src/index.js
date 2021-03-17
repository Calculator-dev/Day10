var myPet = {
    species: "pekinezer",
    name: "vuk",
    legs: 4,
    friends: ["mika", "laza"]
}

function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet));
module.exports = {
    myPet,
    myFunction
};
