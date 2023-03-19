function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(390, 200);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 160, 120, 320, 240);  
    fill('red')
    noStroke();
    circle(70,  70, 80);
    fill('red')
    noStroke();
    circle(570,  410, 80);
    fill('red')
    noStroke();
    circle(70,  410, 80);
    fill('red')
    noStroke();
    circle(570,  70, 80);
    fill('green');
    noStroke(); 
    rect(110, 60, 420, 20);
    fill('green');
    noStroke(); 
    rect(110, 400, 420, 20);
    fill('green');
    noStroke(); 
    rect(60, 110, 20, 260);
    fill('green');
    noStroke(); 
    rect(560, 110, 20, 260);
    
}

function take_snapshot(){
    save('Atiksh.png');
}
