// food I love

let food = [{
  name: "sushi",
  kind: "sashimi"
}, {
  name: "popeyes",
  kind: "fried chicken"
}, {
  name: "noodles",
  kind: "pasta"
}, {
  name: "soup",
  kind: "tomato"
}];

let randomIndex;
let animating = false;
let trump = [];

function preload(){

  for (let i = 0; i<= 20; i++) {
    trump[i] = loadImage(`assets/
      trump_${i}.PNG`)
  }

}


function setup() {
  createCanvas (600,600);
  background (200);
  textSize(32);

  text("click to randomize", 50, 50);
  console.log(trump);

  mic = new p5.AudioIn()
  mic.start();
  mic.stop();

}


function draw () {

  if(animating == true){
    ellipse(random(width),random(height), random(50, 200));
  }
}

function randomizer(){
  animating = false;
  if (food[0]) {
    //this displays random food
    background(random(200, 255));
    randomIndex = int(random(food.length));
    text(`${food[randomIndex].name}'s best dish is
    ${food[randomIndex].kind}`, 50, 50);
    // text(food[randomIndex].name + "'s best dish is " +
    // food[randomIndex].kind, 50, 50);
    food.splice(randomIndex, 1);
  } else{
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
