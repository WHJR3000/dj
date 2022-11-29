function preload(){
sound1 =loadSound("Eyestell.mp3");
sound=loadSound("Save Me BTS.mp3");
}

LeftWristx=0;
LeftWristy=0;
RightWristx=0;
RightWristy=0;

LeftWristScore=0;
RightWristScore=0;


function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

Posenet=ml5.poseNet(video, modelLoaded);
Posenet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("magenta");

    stroke("magenta");
}
function modelLoaded(){
    console.log("posenet is on yayyy!!!!");
    }
    
    
    function gotPoses(results){
    
    if(results.length > 0){
if(RightWristy > LeftWristy && RightWristScore > LeftWristScore ){

sound1.play();

}
else{
    sound.play()
}






    }










































































}