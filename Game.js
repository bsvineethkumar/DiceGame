var scores, roundscores, activeplayer, gamePlaying;
init();
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        var dice = Math.floor(Math.random()*6)+1;
        var dice1 = Math.floor(Math.random()*6)+1;
        
        var diceDom =  document.querySelector('.dice');
        var diceDom1 =  document.querySelector('.dice1');
        
        diceDom.style.display = 'block';
        diceDom1.style.display = 'block';
        
        diceDom.src  ='dice-' + dice + '.png';
        diceDom1.src  ='dice-' + dice1 + '.png';
        
        
        if(dice !== 1 && dice1 !== 1){
        roundscores = roundscores + dice + dice1;
        document.querySelector('#current-' + activeplayer).textContent = roundscores;
        }else{
            nextplayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying){
        scores[activeplayer] += roundscores;
    
        document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];   
        
        var input = document.querySelector('.final').value;
        var winingScores;
        
        if(input){
            winingScores = input;
        }else{
            winingScores = 100;
        }
        
        if(scores[activeplayer] >= winingScores){
            document.querySelector('#name-' + activeplayer).textContent = 'winner!';
        
            hideDice();
            document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            nextplayer(); 
        } 
    }
});

function nextplayer(){
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscores = 0;    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        //document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');    
     hideDice();
}

    document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundscores = 0;
    activeplayer = 0;
    gamePlaying = true; 
    
     hideDice();
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1' ).textContent = 'player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
}
function hideDice(){
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
}