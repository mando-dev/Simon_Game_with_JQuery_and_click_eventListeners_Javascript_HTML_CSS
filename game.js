

    //Variables
    var userClickedPattern = [];
    var gamePattern = []; //5. 
    var buttonColours = ["red", "blue", "green","yellow"]; //3. 
    var started = false; //keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
    var level = 0;
$(document).keypress(function(){//14. detect when keyboard key has been pressed, when that happens for first time, call nextSequence().
if (!started) { // if keypressed, the h1 will change from "Press key to start" to "Level0"
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    }
    });
$(".btn").click(function() { //9. detects when any of buttons are clicked and trigger a handler function. 
    var userChosenColour = $(this).attr("id"); //10. Inside the handler,a new var 'userChosenColour' to store the id of button that got clicked.
    userClickedPattern.push(userChosenColour);//11 Add the contents of the var 'userChosenColour' to the end of 'userClickedPattern'
    playSound(userChosenColour);//In the same way we played sound in nextSequence(), when user clicks on button, the corresponding sound should be played.
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);//16. calling 'checkAnswer()' after user has clicked and chosen their answer, passing in the index of last answer in users sequence/pattern
    });
function checkAnswer(currentLevel){//checking if most recent user-answer is the same as the game pattern. if so log success or wrong. 
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){//step 17
        console.log("success");
    if (userClickedPattern.length === gamePattern.length){//if user got most recent answer right in step 17, then check that they have Finished their sequence/patter w another if statement
        setTimeout(function (){ nextSequence(); }, 1000);
        }
        } else {
        console.log("wrong");// 
        playSound("wrong");//18 . mp3 file name is 'wrong', when user gets answer wrong
        $("body").addClass("game-over"); // this changes background of the body
        setTimeout(function () {$("body").removeClass("game-over"); }, 200);//18.1 apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $("#level-title").text("Game OVer, Press Any Key to Restart");// replace html text w this when user is wrong
        startOver();//. Call startOver() if the user gets the sequence wrong.
        }
        }
function nextSequence() { // 1. 
    userClickedPattern = [];// 18. resetting this to get it ready for next level
    level ++;//15. increase the level by 1 every time nextSequence() is called.
    $("#level-title").text("Level " + level); //15. update the h1 with this change in the value of level.
    var randomNumber = Math.floor(Math.random() * 4); //2. 
    var randomChosenColour = buttonColours[randomNumber];//4. use randomNumber from function to SELECT a random colour from the buttonColours array. and create var
    gamePattern.push(randomChosenColour); //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);    //6. select the button with the same id as the randomChosenColour. //7. use jQuery to animate a flash to the button selected in step 4.
    playSound(randomChosenColour);//Refactor code in playSound() so that it will work for both playing sound in nextSequence() and when user clicks a button.
    }
//Audio n Animation
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3"); //8.JS to play the sound for the button colour selected in step 4
    audio.play();
    }
 function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");//12 jQuery to add this pressed class to button that gets clicked inside animatePress().
    setTimeout(function() { $("#" + currentColor).removeClass("pressed"); },100);//13. JS to remove the pressed class after a 100 milliseconds. there are 2 parameters in 'setTimeout()'.
    }
function startOver(){//reset the values of level, gamePattern and started variables to start game over
    level = 0;
    gamePattern = [];
    started = false;
    }





   


    
