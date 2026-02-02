/*
For this exercise, I tried using stochastic techiniques to create small animations to a graphic design. I decided to use this technique as I found the grainy quality to be very reminiscent of risograph or screen printing. I wanted to hence achieve a similar effect by playing with overlap, density, and fading. 

I used random distributions for the wavy lines, and a Gaussian distribution for the background for contrast. 

As for the circle, I found that a random distribution through -1 and 1 already had a natural bias towards the more central values around 0, causing an uneven spot in the centre. However, I wanted a more even grain, hence I applied a biased distribution away from the centre (closer to the value of 1) to calibrate it. 

For the square, I applied a random distribution to the base shape, but added a bottom left corner bias shadow over it to create an illusion of the tilt caused by the weight of the shadow. 

Finally, for the blue rectangle. I applied a bottom bias distribution to create a fade effect. 

Moving on, I could improve in making the sketch more dynamic, in which one distribution could transition into another.

Overall, I was very surprised at the effectiveness of stochastic techiniques to create visual texture and interest and I would definitely use this method for graphic design projects and many other things in the future. 
*/

function setup() {
    createCanvas(512, 512);
    frameRate(20);
    noFill();
}

function draw() {

    background(245, 245, 245);

    
    stroke(0);
    var standardDeviation = 400;
    for (var i = 0; i < 5000; i++) {
        var backDist = randomGaussian(0, standardDeviation);
        var b = createVector(backDist, random(-height, height));
        point(b.x, b.y);
    }

    // circle
    //stroke --> Color RGB code
    stroke(222, 145, 51);
    //translate --> 
    translate(width / 5, height / 4);
    for (var i = 0; i < 5000; i++) {
        var cirDist = (max(random(0, 1.5), random(0, 0.75)) * width) / 15; //Outside, Inside, Size
        var angle = random(0, PI * 2);
        var c = createVector(cos(angle), sin(angle));
        c.mult(cirDist);
        point(c.x, c.y);
    }

    // top line
    stroke(222, 145, 51);
    for (var i = 0; i < 1500; i++) { // i < value --> Density of the noise
        var lineX = random(70, 350);  // X-axis length X1 - X2
        var lineY = random(20 - 10, 20 + 150);
        point(lineX, lineY);
    }
    

    // bottom line
    for (var i = 0; i < 2000; i++) {
        var lineX = random(70, 350);
        var lineY = random(320 - 150, 320 + 10);
        point(lineX, lineY);
    }

    // left & right lines
    for (var i = 0; i < 1000; i++) {
        var leftLineX = random(90 - 20, 90 + 10); // 90 is the centre
        var leftLineY = max(random(10, 330), random(10, 330));
        point(leftLineX, leftLineY);

        var rightLineX = random(340 - 10, 340 + 10);
        var rightLineY = max(random(10, 330), random(10, 330));
        point(rightLineX, rightLineY);
    }

    // square
    stroke(36, 157, 148);
    for (var i = 0; i < 5000; i++) {
        var sqX = random(100, 230);
        var sqY = random(200, 300);
        push();
        rotate(-PI / 8);
        point(sqX, sqY);
        pop();
    }

    // square shadow
    stroke(152, 51, 222);
    for (var i = 0; i < 5000; i++) {
        var sqBX = min(random(100, 300), random(100, 230));
        var sqBY = max(random(200, 300), random(200, 300));
        push();
        rotate(-PI / 8);
        point(sqBX, sqBY);
        pop();
    }

    // Shadow wave
    push();
    stroke(59, 62, 191);
    translate(0, height / 2 + 20); //Location of the line
    var amp = 30; //Level of wave
    for (var i = 0; i < 4000; i++) {
        var waveX = random(70, 350);
        var waveY = cos((waveX / width) * PI * 6) * amp;
        waveY += random(-15, 15);
        point(waveX, waveY);
    }
    pop();

    // wave yellow
    push();
    stroke(139, 221, 247);
    translate(0, height / 2);
    var amp = 20;
    for (var i = 0; i < 8000; i++) {
        var waveX = random(70,350);
        var waveY = cos((waveX / width) * PI * 6) * amp;
        waveY += random(-15, 15);
        point(waveX, waveY);
    }
    pop();
}
