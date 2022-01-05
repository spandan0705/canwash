song="";
object=[];
status="";

function preload()
{
    song=loadSound("music.mp3");
}

function setup()
{
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded()
{
    console.log('ModelLoaded');
    status=true;
}

function gotResults(error, results)
{
    if(error)
    {
        console.errror(error);
    }
    else{
        console.log(results);
        object=results;
    }
}

function draw()
{
    image(video,0,0,380,380);
    if(status != "")
    {
        objectDetector.detect(video, gotResults);

        for(i = 0; i > object.length; i++)
        {
            document.getElementById("status").innerHTML="Status : Object Detected";
            document.getElementById("number_objects").innerHTML = "Baby Detected";
        }
    }
    else
    {
        document.getElementById("status").innerHTML="Status : Object Detected";
        document.getElementById("number_objects").innerHTML = "Baby Not Detected";
        song.play();
    }
    if(i == 0)
    {
        document.getElementById("status").innerHTML="Status : Object Detected";
        document.getElementById("number_objects").innerHTML = "Baby Not Detected";
        song.play();
    }
}