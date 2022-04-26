function preload(){
    img= loadImage("Virat-Kohli-and-his-Cars-01.jpg")
}

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();

    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";

}

function draw(){
    image(img,0,0,380,380);

}

function modelLoaded(){
    console.log("model loaded");
    status= true;
    
}

function gotResult(error,results){
    if(error){
        console.error(error);
        
    }
        console.log(results);
        objects=results;
    }
    