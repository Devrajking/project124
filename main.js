difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);


    canvas=createCapture(550,550);
    canvas.size(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    pose.on('pose' ,gotPoses);
}

function modelLoaded(){
    console.log('poseNet Is Initialized!');
}
function draw(){
    background('yellow');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}