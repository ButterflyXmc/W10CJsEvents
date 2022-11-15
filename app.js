let body = document.body;
body.style.backgroundColor = `navy`;
body.style.textAlign = `center`;

document.body.onkeyup = function(e){
    if(e.key == " " ||
       e.code == "space" ||
       e.keyCode == 32) {
        body.style.backgroundColor = `dimgrey`} ;
       
}

let heading = document.getElementById(`heading`);
heading.onclick=function(){
    heading.style.color = `white`;
    heading.style.border = `white solid 5px`;
    heading.style.fontSize = `6em`;
}



let box1 = document.getElementById(`box1`);

box1.addEventListener(`mouseenter`,() => box1.style.border = `solid 10px darkgreen`);
box1.addEventListener(`mouseleave`,() => box1.style.border = `solid 5px lightgreen`);
box1.addEventListener(`mouseenter`,() => box1.style.fontSize = `2em`);
box1.addEventListener(`mouseleave`,() => box1.style.fontSize = `1.5em`);

let box2 = document.getElementById(`box2`);

box2.addEventListener(`mouseenter`,() => box2.style.border = `solid 10px maroon`);
box2.addEventListener(`mouseleave`,() => box2.style.border = `solid 5px red`);
box2.addEventListener(`mouseenter`,() => box2.style.fontSize = `2em`);
box2.addEventListener(`mouseleave`,() => box2.style.fontSize = `1.5em`);

let box3 = document.getElementById(`box3`);

box3.addEventListener(`mouseenter`,() => box3.style.border = `solid 10px pink`);
box3.addEventListener(`mouseleave`,() => box3.style.border = `solid 5px hotpink`);
box3.addEventListener(`mouseenter`,() => box3.style.fontSize = `2em`);
box3.addEventListener(`mouseleave`,() => box3.style.fontSize = `1.5em`);


// let img = document.getElementById(`img`);

// img.addEventListener(`click`,() => img.style.height = `270px`);


let images = document.querySelectorAll(`img`);
for(let i=0; i<images.length;i++){
    images[i].style.height = `200px`;
}