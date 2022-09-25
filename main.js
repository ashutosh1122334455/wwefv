quick_draw_data_set=["aircraft carrier" , "airplane" , "alarm clock" , "ambulance" , "angel" , "ant" , "anvil" , "apple" , "ball" , "bat" , "cat" , "dart" , "duck" , "envelope" , "elephant" , "fauna" , "flora" , "ghost" , "glue" , "hat" , "hill" , "jackfruit" , "line" , "mango" , "man" , "nose" , "night" , "orange" , "planet" , "plum" , "quill" , "rhombus" , "shoe"  , "watermelon"];
random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
Element_of_array = quick_draw_data_set[random_number];
document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch to be Drawn: "+Element_of_array;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
sketch = Element_of_array;

function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup()
{
    canvas = createCanvas(280,280);
    canvas.center();
    background("yellow");
    canvas.mouseReleased(classifyCanvas);
}

function clearCanvas()
{
    background("yellow");
}

function draw()
{
    strokeWeight(10);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}




function check_sketch(){
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer: "+timer_counter;
    if(timer_counter>400){
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check = "completed" , answer_holder = "set"){
        timer_check = "";
        answer_holder = 0;
        updateCanvas();
    }
    if(drawn_sketch == sketch){
            answer_holder = "set";
            score = score+1;
            document.getElementById("score").innerHTML = "Score: "+score;
        }
    }


function updateCanvas(){
    background("white");
    sketch = Element_of_array;
    document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch To Be Drawn: "+sketch;
}

