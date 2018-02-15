function meowClick() {
    var instructions = document.getElementById("instructions");
    instructions.classList.add("hidden");

    var gameGrid = document.getElementById("gameGrid");
    gameGrid.classList.remove("hidden");
}

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
    var letter = event.key.toLowerCase(); //gives letter pushed, convert to lower case, assign result to var letter
    if (isAlphaNum(letter)) { //checks to see if alphanumeric using previous function above, will only execute what is in the curlies if the expression in the parentheses is true
        var n = myWord.indexOf(letter);//looks to see if letter pressed is in word
        if (n >= 0) {//if not in word returns -1, finds index of letter in word
            // happy path: only if n >=0 will these lines be executed
            for (var i = 0; i < myWord.length; i++) {//sets # of times to loop and ++ means loop again if condition not met
                if (myWord.charAt(i) === letter) {//if letter typed is letter in word
                    document.getElementById("w0-l" + i).innerHTML = letter;//if letter chosen is in word, it will display
                    if (isWordGuessed(myWord)=== true){//if returns value of true, then show pic
                        showPic();
                    }
                    
                }
                
            }
        }
        else {
            // sad path
            
            var failedGuesses = document.getElementById("guessed").innerHTML;
            
            if (failedGuesses.indexOf(letter) === -1) {
                document.getElementById("guessed").innerHTML = failedGuesses + letter;    
                lives--;  
            document.getElementById("remaining").innerHTML = lives;
                 
            }
            
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