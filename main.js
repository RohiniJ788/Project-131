img="";

function setup(){
canvas=createCanvas(630,420);
canvas.center();
}

function preload(){
    img=loadImage('orange.jpg');
}

function draw(){
    image(img,0,0,640,420);
}