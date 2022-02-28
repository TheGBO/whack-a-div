var score = 0;

function randomizeDivs(){
    setTimeout(()=>{
        addDiv();
        var cdiv = document.getElementsByClassName('clickable-div');
        for(let i =0; i<cdiv.length;i++){
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            cdiv[i].style.top = Math.floor(Math.random() * window.innerHeight-100)+'px';
            cdiv[i].style.left = Math.floor(Math.random() * window.innerWidth-100)+'px';
            cdiv[i].style.backgroundColor = "#"+randomColor;
            setTimeout(() => {
                cdiv[i].remove()
            }, 5500);
        }
        requestAnimationFrame(randomizeDivs);
    }, Math.floor(Math.random() * 1000));
}

function addDiv(){
    document.body.innerHTML += '<div class="clickable-div" onclick="clickDiv(this)"></div>';
}

function clickDiv(div){
    score++;
    div.remove();
    document.getElementById('tick').play();
    document.getElementById('score-cnt').innerText = score;
}

requestAnimationFrame(randomizeDivs);