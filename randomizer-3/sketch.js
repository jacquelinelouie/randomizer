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
let imageCounter = 0;
let button;

function preload(){
  for (let i = 0; i <= 19; i++){
    trump[i] = loadImage(`assets/trump_${i}.png`)
  }
}

function setup() {
  createCanvas (600,600);
  background (200);
  textSize(32);
  imageMode(CENTER);
  frameRate(12);

  text("click to randomize", 50, 50);
  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);

}

function draw () {

  if(animating == true){
    clear();
    image(trump[imageCounter], width / 2, height / 2)

  if (imageCounter < trump.length - 1){
    imageCounter++;
  } else {
    imageCounter = 0;
  }
}
}

function randomizer(){
  animating = false;
  if (food[0]) {
    //this displays random food
    // background(random(200, 255));
    clear();
    randomIndex = int(random(food.length));
    text(`${food[randomIndex].name}'s best dish is
    ${food[randomIndex].kind}`, 50, 50);
    image(random(trump), width / 2, height / 2);
    // text(food[randomIndex].name + "'s best dish is " +
    // food[randomIndex].kind, 50, 50);
    food.splice(randomIndex, 1);
  } else{
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
  }
