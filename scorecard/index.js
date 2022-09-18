let currentScoreHome = 0;
let currentScoreGuest = 0;
let scoreDisplayHome = document.getElementById('scoreDisplay_home');
let scoreDisplayGuest = document.getElementById('scoreDisplay_guest');
let winner = document.getElementById('winner-is');
let showWinner_btn = document.getElementById('showWinner');
let stretchingGoal = document.getElementById('stretchingGoal');
let buttons = document.querySelectorAll('.buttons button');
stretchingGoal.style.opacity = "0";
winner.style.color = "white";


scoreDisplayHome.textContent = currentScoreHome;
scoreDisplayGuest.textContent = currentScoreGuest;

function addOneHome(){
    scoreDisplayHome.textContent = currentScoreHome += 1;
     stretchingGoal.style.opacity = "1";
}


function addTwoHome(){
    scoreDisplayHome.textContent = currentScoreHome += 2;
     stretchingGoal.style.opacity = "1";
}


function addThreeHome(){
    scoreDisplayHome.textContent = currentScoreHome += 3;
     stretchingGoal.style.opacity = "1";
}

function addOneGuest(){
    scoreDisplayGuest.textContent = currentScoreGuest += 1;
     stretchingGoal.style.opacity = "1";
}


function addTwoGuest(){
    scoreDisplayGuest.textContent = currentScoreGuest += 2;
     stretchingGoal.style.opacity = "1";
}


function addThreeGuest(){
    scoreDisplayGuest.textContent = currentScoreGuest += 3;
     stretchingGoal.style.opacity = "1";
}

function showWinner(){
    
if(currentScoreHome > currentScoreGuest){
    currentScoreHome = currentScoreHome - currentScoreGuest;
    winner.style.opacity = "1";
   winner.innerHTML = `<p><span class="winnerTxt">HOME is a winner. Congratulations!!!</span> <span class="looserTxt">GUEST lost game by ${currentScoreHome} points</span></p>`;
    showWinner_btn.style.display = "none";
      
   
}else if(currentScoreGuest > currentScoreHome)
{
    currentScoreGuest = currentScoreGuest - currentScoreHome;
   winner.style.opacity = "1";
        winner.innerHTML = `<p><span class="winnerTxt"> GUEST is a winner. Congratulations!!!</span> <span class="looserTxt">HOME lost game by ${currentScoreGuest} points</span></p>`;  
         showWinner_btn.style.display = "none";
         
        
}else if(currentScoreHome === currentScoreGuest){
    winner.textContent = "Game ends in a tie";
      showWinner_btn.style.display = "none";
}
buttons.forEach(scorePlusBtns => {
   //scorePlusBtns.setAttribute('disabled','disabled');
   scorePlusBtns.style.display = "none";
})
}


function startNew(){
scoreDisplayHome.textContent = currentScoreHome = 0;
scoreDisplayGuest.textContent = currentScoreGuest = 0;
 winner.textContent = " ";
    showWinner_btn.removeAttribute('disabled', 'disabled');
    showWinner_btn.style.display = "inline-block";
     stretchingGoal.style.opacity = "0";
     buttons.forEach(scorePlusBtns => {
   //scorePlusBtns.removeAttribute('disabled','disabled');
    scorePlusBtns.style.display = "block";
})
    }
    


