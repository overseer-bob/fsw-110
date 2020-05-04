let box = document.getElementById("box");
box.addEventListener("mouseover", hoversBlue);
box.addEventListener("mousedown", buttonHeldRed);
box.addEventListener("mouseup", buttonReleasedYellow);
box.addEventListener("dblclick", doubleClickGreen);
document.body.addEventListener("wheel", scrollOrange);
document.addEventListener('keypress', keydown);

function keydown(k){
    if(k.code == "KeyR"){
        box.style.backgroundColor = "red";
    } else if(k.code == "KeyB"){
        box.style.backgroundColor = "blue";
    } else if(k.code == "KeyY"){
        box.style.backgroundColor = "yellow";
    } else if(k.code == "KeyG"){
        box.style.backgroundColor = "green";
    } else if(k.code == "KeyO"){
        box.style.backgroundColor = "orange";
    }
}

function hoversBlue(){
    box.style.backgroundColor = "blue";
}

function buttonHeldRed(){
    box.style.backgroundColor = "red";
}

function buttonReleasedYellow(){
    box.style.backgroundColor = "yellow";
}

function doubleClickGreen(){
    box.style.backgroundColor = "green";
}

function scrollOrange(){
    box.style.backgroundColor = "orange";
}