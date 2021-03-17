function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            relase_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Haris Aksalic",
            title: "Front end developer",
            relase_year: 1997,
            id: 25148963214,
            formats: {
                1: "Tatko na UX/UI",
                2: "Tatko na Web development",
                3: "Tatko na zene"
            },
        }
        
    };
    return myMusic;
}

myFunction()[2];  
module.exports = myFunction;