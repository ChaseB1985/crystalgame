//There will be four crystals displayed as buttons on the page.
//The player will be shown a random number at the start of the game.
function assignVal(cryId){
    var crystalVal = $(cryId);
    var num = Math.floor(Math.random() * 9) + 1;
    crystalVal.attr("value",num);
}
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
var getButtonValue = function($button) {
    var label = $button.text(); 
    $button.text('');
    var buttonValue = $button.val();
    $button.text(label);
    return buttonValue

//Your game will hide this amount until the player clicks a crystal.
$("button").click(function(){
    alert("value")
});
//this assigns value to each crystal
assignVal("#ruby");
assignVal("#emrald");
assignVal("#diamond");
assignVal("#sapphire");
//When they do click one, update the player's score counter.

var userScore = 0;
var wins= 0;
var losses = 0;
//  Decaring variables for tallies



//The player wins if their total score matches the random number from the beginning of the game.
$('#numberWins').text(wins);
//The player loses if their score goes above the random number.
$('#numberLosses').text(losses);
//The game restarts whenever the player wins or loses.
function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#endScore').text(userTotal);
    } 

//When the game begins again, the player should see a new random number. 
function winner(){
    alert("You won!");
      wins++; 
      $('#numberWins').text(wins);
      reset();
    }
    //addes the losses to the userTotal
    function loser(){
    alert ("You lose!");
      losses++;
      $('#numberLosses').text(losses);
      reset()
    }
    //sets up click for jewels
      $('#sappire').on ('click', function(){
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#endScore').text(userTotal); 
              //sets win/lose conditions
            if (userTotal == Random){
              yay();
            }
            else if ( userTotal > Random){
              loser();
            }   
      })  
      $('#ruby').on ('click', function(){
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#endScore').text(userTotal); 
            if (userTotal == Random){
              yay();
            }
            else if ( userTotal > Random){
              loser();
            } 
      })  
      $('#emrald').on ('click', function(){
        userTotal = userTotal + emrald;
        console.log("New userTotal= " + userTotal);
        $('#endScore').text(userTotal);
    //sets win/lose conditions
              if (userTotal == Random){
              yay();
            }
            else if ( userTotal > Random){
              loser();
            } 
      })  
      $('#diamond').on ('click', function(){
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#endScore').text(userTotal); 
          
              if (userTotal == Random){
              yay();
            }
            else if ( userTotal > Random){
              loser();
            }
      });   
  
//Also, all the crystals will have four new hidden values. 
//Of course, the user's score (and score counter) will reset to zero.


//The app should show the number of games the player wins and loses.
// To that end, do not refresh the page as a means to restart the game.

//generate random number between 0 and 50
var targetNum = $("#targetNum");

function setTarget(){
    var num = Math.floor(Math.random() * 50);
    targetNum.text(num);
}
setTarget();

//generate crystal number
//make a function that takes the values of click crystals and adds them
$(".crystal").on("click", function(){
    var fired_button = $(this).val();
    console.log(this);
    console.log(fired_button);

});
