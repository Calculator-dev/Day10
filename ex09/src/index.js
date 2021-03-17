function myFunction(myObj, checkProp) {

    var bwt = {
        title: "Titanic",
        song: "My Hearth Will Go On",
        genre: "drama"
    }
    bwt.hasOwnProperty(checkProp);
    myObj = bwt[checkProp];

    if (bwt.hasOwnProperty(checkProp)) {
        return myObj;
    }
    return "Not Found";
}
module.exports = myFunction;