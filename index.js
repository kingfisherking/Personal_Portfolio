//let skills = document.getElementById('skills');
let hard = document.getElementById('hard');
let soft = document.getElementById('soft');
let trigger = false;

function displayHard(){
    hard.style.display = 'inline';
    soft.style.display = 'none';
}

function displaySoft(){
    soft.style.display = 'inline';
    hard.style.display = 'none';
}

function changeState(){
    if(trigger){
        displayHard();
        trigger = false;
    }
    else{
        displaySoft();
        trigger = true;
    }
}



document.addEventListener('click', changeState);