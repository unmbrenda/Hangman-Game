function meowClick() {
    var instructions = document.getElementById("instructions");
    instructions.classList.add("hidden");

    var gameGrid = document.getElementById("gameGrid");
    gameGrid.classList.remove("hidden");

}

// var hangman = {
//     imagePath: "./assets/images",
//     currentWordIndex: 0,
//     words: [
//         { word: "whiskers", img: "./whiskers.jpg" },
//         { word: "siamese", img: "siamese.jpg" },
//         { word: "maine coon", img: "maineCoon.jpg" },
//         { word: "scratch", img: "scratch.jpg" },
//         { word: "ragdoll", img: "ragdoll.jpg" },
//         { word: "burmese", img: "burmese.jpg" }
//     ],
//     inProgress: false,

// currentWord: function() {
//     return this.words[this.currentWordIndex].word;
// },
// currentWordPath: function () {
//     return this.imagePath + "/" + this.words[this.currentWordIndex].img;
// },
// nextWord: function () {
//     if (this.currentWordIndex < this.words.length) {
//         this.currentWordIndex++;
//     }
// }

// }

// console.log(hangman.currentWordPath());
// hangman.nextWord();
// console.log(hangman.currentWordPath());

//  console.log(hangman.currentWord());

function isAlphaNum(char) {
    if (char.length > 1) {
        return false;   //single char eval only
    }
    var code = char.charCodeAt(0);

    if (
        (code >= 65 && code <= 90) // A-Z
        || (code >= 97 && code <= 122) //a-z
        || (code >= 48 && code <= 57) //0-9
    ) {
        return true;
    }
    else {
        return false;
    }
}

var lives = 10
var myWord = "maine-coon"
document.onkeyup = function (event) {
    var letter = event.key.toLowerCase();
    if (isAlphaNum(letter)) {
        var n = myWord.indexOf(letter);
        if (n >= 0) {
            // happy path
            for (var i = 0; i < myWord.length; i++) {
                if (myWord.charAt(i) === letter) {
                    document.getElementById("w0-l" + i).innerHTML = letter;
                    if (isWordGuessed(myWord)=== true){
                        showPic();
                    }
                }
                
            }
        }
        else {
            // sad path
            lives--;
            if (lives <= 0) {
                // picture
                showPic();
            }
        }
    }
}

function showPic() {
    var picture = document.getElementById("maine-coon-pic");
    picture.classList.remove("hidden");

    var stats = document.getElementById("stats");
    stats.classList.add("hidden");

}

function isWordGuessed(word) {
    var letterHolder = document.getElementById(word);

    for (var i = 0; i < letterHolder.childElementCount; i++) {
        if (letterHolder.children[i].innerText.length === 0){
            return false;
        }

       
    }
            return true;
    }

    // $("#roastbeef").on("click", function(){
    //     trackSandwiches++;
    //     alert("You have eaten " + trackSandwiches + " sandwiches");
    //   });