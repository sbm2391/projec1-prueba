var canvas;
var myGame;
var fps = 60;
var mySound;
var totalScore=0;
var myMusic;
var totalScoreArmy=0;
$(document).ready(function(){
        canvas = document.getElementById("board").getContext('2d');
        myGame = new Game(canvas); 
        //audio 
        myMusic = new Audio("music/background-music.mp3");
        myMusic.volume = 0.3;
        myMusic.play();
        //controls
        keyListener();
        //army
        army();
        var a = setInterval(function(e) {
            myGame.board.drawBoard();
            
            //lemming
            myGame.player1.drawPlayer();
            startArmy();
            //myGame.army1.moveArmy();
            //game over
            //myGame.army1.gameOver();
            myGame.player1.gameOver();
            
            score();
            //followLemming();

        },1000/fps)

        
    $("#btn").on("click", function(){       
    });

    
});

function army (){
    for (var i = 500; i <= 4500; i+=500){
        myGame.army.push(new Army (canvas, 100, -i));
        console.log(myGame.army)
    }  
}

function startArmy(){
   
    myGame.army.forEach(function(element){
        element.moveArmy();
        //element.army.gameOver();
        if (myGame.player1.position.length>0){
        if (myGame.player1.position[0].x === element.posX) {
            element.ArmyDig();
          } else {
              return;
          }
        }
        console.log(totalScoreArmy);
        totalScore = totalScoreArmy + myGame.player1.points;
        if (totalScore === 10){
            console.log(totalScore)
            $(".win").css("opacity", "100");
            $(".win p").text(`Score: ${totalScore}`);
            $("#score").text(`Score: ${totalScore}`);
            myMusic.pause();
        }
    });
}

function score(){
    $("#score").text(`Score: ${myGame.player1.points}`)
}
//Funcion para escuchar eventos del teclado
function keyListener(){
    document.addEventListener("keydown", function(e){
        switch (e.keyCode) {
            case 39: //->
                myGame.player1.moveRight() 
                break;
            case 37: //<-
                myGame.player1.moveLeft();
                break;
            case 40: //down
                myGame.player1.dig();
                break;
            default:
                break;
        }
    });

    //function follow

}
