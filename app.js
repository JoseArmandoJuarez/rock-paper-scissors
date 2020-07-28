const items = ['rock', 'paper', 'scissors', 'Shoot!'];

let player = '';
let pc = '';

function startGame() {
   
   let pcChoise = Math.floor(Math.random() * 3);
   pc = items[pcChoise];

   var i = 0;
   setInterval(function () {
      if (i <= 3) {
         
         document.getElementById('gameText').innerHTML = items[i];
         if (i >= 3) {
            document.getElementById('pcChoise').innerHTML = 'PC: ' + pc;
         }
      }
      else {
         clearInterval();
      }
      i += 1
   }, 500);
}


function playerChoise(choise) {
   player = choise;

   if ((pc === 'rock' && player === 'rock') || (pc === 'paper' && player === 'paper') || (pc === 'scissors' && player === 'scissors')) {
      document.getElementById('youWonLost').innerHTML = 'No Winner!';
   }
   if ((pc === 'rock' && player === 'paper') || (pc === 'paper' && player === 'scissors') || (pc === 'scissors' && player === 'rock')) {
      document.getElementById('youWonLost').innerHTML = 'You Win!';
   }
   if ((pc === 'paper' && player === 'rock') || (pc === 'scissors' && player === 'paper') || (pc === 'rock' && player === 'scissors')) {
      document.getElementById('youWonLost').innerHTML = 'You Lost!';
   }
}



function renderRockPaperScissors(){
   let element = "";
   for(let i = 0; i < items.length; i++){
      if(i <= 2){
         let turnString = items[i].toString();
         element +=  "<div class='card mx-4 player-select'>" +
                        "<img src='" + items[i] + ".png' class='card-img-top' alt='"+ items[i] +"'" + "onclick='playerChoise(" + '"'+turnString + '"'+ ")'>"+
                        // "<div class='card-body'>" +
                        //    "<button class='btn btn-success btn-block player'" + "onclick='playerChoise(" + '"'+turnString + '"'+ ")'>" + items[i] + "</button>" +
                        // "</div>" +
                     "</div>"
      }
   }

   document.getElementById('render-elements').innerHTML = element;

}
renderRockPaperScissors();



function startAnim(){
   var tl = gsap.timeline();

   tl.to("#rockHand", {duration: .25, ease: "none", transformOrigin: '0% 100%', rotation: -40, y: -40});
   tl.to("#rockHand", {duration: .25, ease: "none", transformOrigin: '0% 100%', rotation: 20, y: 40});
   tl.to("#rockHand", {duration: .25, ease: "none", transformOrigin: '0% 100%', rotation: -40, y: -40});
   tl.to("#rockHand", {duration: .25, ease: "none", transformOrigin: '0% 100%', rotation: 20, y: 40});
   tl.to("#rockHand", {duration: .25, ease: "none", transformOrigin: '0% 100%', rotation: -40, y: -40});
   tl.to("#rockHand", {duration: .25, ease: "none", transformOrigin: '0% 100%', rotation: 20, y: 40});
   tl.to("#rockHand", {duration: .25, ease: "none", transformOrigin: '0% 100%', rotation: -40, y: -40});
   tl.to("#rockHand", {duration: .25, ease: "none", transformOrigin: '0% 100%', rotation: 0, y: 0});
   
   if(pc === 'rock'){
      tl.to("#rockHand", {duration: .25, ease: "none", transformOrigin: '0% 100%', rotation: 0, y: 0});
   }
   if(pc === 'scissors'){
      tl.to("#rockHand", { display: 'none'}, "-=.5")
      tl.to("#scissorsHand", {opacity: 1, display: 'block', rotation: 0, y: 0}, "-=.02");
   }
   if(pc === 'paper'){
      tl.to("#rockHand", { display: 'none'}, "-=.5")
      tl.to("#paperHand", {opacity: 1, display: 'block', rotation: 0, y: 0}, "-=.02");
   }

}
