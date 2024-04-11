Status = "";

function preload(){
    wardrobe_image = loadImage("65a7c604c92e93558473f0b7-hitow-4-door-wardrobe-armoire-with.jpg");
}

function setup(){
    canvas = createCanvas(1000,650);
    canvas.position(610,260);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(fan_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
   
}