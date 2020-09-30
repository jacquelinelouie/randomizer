// food I love

let food = [{
  name: "sushi",
  kind: "sashimi"
}, {
  name: "friedchicken",
  kind: "popeyes"
}, {
  name: "noodles",
  kind: "pasta"
}, {
  name: "soup",
  kind: "tomato"
}];

let randomIndex;


function setup() {
  createCanvas (600,600);
  background (200);

  mic = new p5.AudioIn()
  mic.start();
  mic.stop();

}

function draw () {


}

function mousePressed() {
  background(random(200, 255));
  randomIndex = int(random(food.length));
  text(food[randomIndex].name, 50,50);
  food.splice(randomIndex, 1);
}
