function computerMove(){
    const randomNumber = Math.random();

    if(randomNumber <= 1/3){
        return 'rock';
    }
    else if(randomNumber <= 2/3){
        return 'paper';
    }
    else{
        return 'scissor';
    }
}
console.log(computerMove());
const score={
    wins:0,
    losses:0,
    ties:0
}
function playGame(playerMove){
    const pickedComputerMove  = computerMove();
    let result='';
    if(playerMove === 'rock'){
    switch(pickedComputerMove){
    case 'rock':
        score.ties++;
        result='Tie'
        break;
    case 'paper':
        score.losses++;
        result='You Lose'
        break;
    case 'scissor':
        score.wins++;
        result='You Win'
        break;
    }

    }
    else if(playerMove === 'paper'){
    switch(pickedComputerMove){
    case 'rock':
        score.wins++;
         result='You Win'
        break;
    case 'paper':
        score.ties++;
        result='Tie'
        break;
    case 'scissor':
        score.losses++;
         result='You Lose'
        break;
    }
    }
    else{
    switch(pickedComputerMove){
    case 'rock':
        score.losses++;
        result='You Lose'
        break;
    case 'paper':
        score.wins++;
        result='You Win'
        break;
    case 'scissor':
        score.ties++;
        result='Tie'
        break;
    }
    }
    document.querySelector('.status').innerHTML= result;
    document.querySelector('.you-computer').innerHTML=`
    you
        <img src="${playerMove}-emoji.png" alt="">
        <img src="${pickedComputerMove}-emoji.png" alt="">
        computer
        `;
        document.querySelector('#stats').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;


    console.log(score);

    }
    function resetCount(){
        score.wins=0;
        score.losses=0;
        score.ties=0;
        document.querySelector('#stats').innerHTML = `Wins:0, Losses:0, Ties:0`;

    }
    let auto=false;
    let id;
    function autoPlay(){
        auto=!auto; 
        if (auto){
        id=setInterval(function(){
        playGame(computerMove());
       },1000);
       document.querySelector('.btn2').innerHTML='Stop';
       }else{
        clearInterval(id);
        document.querySelector('.btn2').innerHTML='Auto play';
       }

    }
