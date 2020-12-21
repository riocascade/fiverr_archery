
function setTimer() {
    c2_callFunction("setTimer", [120]);//call function "setTimer" in game with parameter 0 as value in seconds
    //c2_callFunction("deleteFruit"<?php echo json_encode($my_var); ?>);//call function "deleteFruit" in game. this function to reset total fruit in game
    
    }
function getScore() {
    var totalScore = document.getElementById('currentCoins').value;//get score by element in game
    console.log('total Score '+totalScore);//log
    
    };