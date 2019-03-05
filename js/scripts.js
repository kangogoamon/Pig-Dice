   //business logic//


var player1="";
var player2="";

var rollDice = function () {
  return Math.floor(6*Math.random())+1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

    // checking for roll of 1 //


Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  }
  else {
  this.tempscore += this.roll;
  }
}

      // hold - to tally your rolls to the total and allow next player to play//


Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;

}

    // check for 100 - The first player to reach 100 wins!//


Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}

 //Refresh just the game and not the players names//
Player.prototype.newGame = function () {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName ="";
}

var clearValues = function(){
  $(".nameOne").val("");
  $(".nameTwo").val("");
}

      //User Interface//
$(document).ready(function() {
  $(".console").hide();
  $("button#start").click(function(event){
    player1 = new Player(true);
    player2 =  new Player(false);
    $(".console").show();

    var nameOne = $(".nameOne").val();
    $("#nameOne").text(nameOne);

    var nameTwo = $(".nameTwo").val();
    $("#nameTwo").text(nameTwo);

    player1.playerName=player1Name;
    player2.playerName=player2Name;

  });
  $("button#new-game").click(function(event){
    $(".console").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#roundTotal-1").empty();
    $("#total-score-1").empty();
    $("#die-roll-1").empty();
    $("#roundTotal-2").empty();
    $("#total-score-2").empty();
    $("#die-roll-2").empty();

    $(".menu").show();
});

$("button#player1-roll").click(function(event){
    player1.roll = rollDice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#roundTotal-1").text(player1.tempscore);
});

    $("button#player2-roll").click(function(event){
      player2.roll = rollDice();
      $("#die-roll-2").text(player2.roll);
      player2.rollone();
      $("#roundTotal-2").text(player2.tempscore);
    });

    $("button#player1-hold").click(function(event){
      player1.hold();
      $("#total-score-1").text(player1.totalscore);
      $("#roundTotal-1").empty();
      $("#die-roll-1").empty();
      player1.winnerCheck();
    });

    $("button#player2-hold").click(function(event){
        player2.hold();
        $("#total-score-2").text(player2.totalscore);
        $("#roundTotal-2").empty();
        $("#die-roll-2").empty();
        player2.winnerCheck();
      });

    });
