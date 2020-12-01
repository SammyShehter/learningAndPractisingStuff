var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var circle = function(a,b,radius,fillCircle){
  ctx.beginPath();
  ctx.arc(a,b,radius,0,Math.PI * 2,false)
  if(fillCircle){
    ctx.fill();
  }else{
    ctx.stroke();
  }
}
width = canvas.width;
height = canvas.height;

/*
//Moving Rectangle ->
  var position = 0;
  setInterval(function(){
    ctx.clearRect(0,0,width,height);
    ctx.fillRect(position, 0, 20, 20);
    position++;
    if(position > width){
      position = 0;
    }
  },30);


//Growing Rectangle
var size = 0;
setInterval(function(){
  ctx.clearRect(0,0,width,height);
  ctx.fillRect(0,0,size,size);
  size++;
  if(size > width){
      size = 0;
  }
},30)


//Flying Bee

drawBee = function(a,b){
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Gold";

    circle(a,b,8,true);
    circle(a,b,8,false);
    circle(a - 5,b - 11,5,false);
    circle(a + 5,b - 11,5,false);
    circle(a - 2,b - 1,2,false);
    circle(a + 2,b - 1,2,false);
};

var update = function(coordinate){
    var offset = Math.random() * 4 - 2;
    coordinate += offset;

    if (coordinate > width) {
        coordinate = width;
    }
    if (coordinate < 0) {
        coordinate = 0;
    }
    return coordinate;
}

var a = 100;
var b = 100;

setInterval(function(){
  ctx.clearRect(0,0,width,height);
  drawBee(a,b);
  a = update(a);
  b = update(b);

  ctx.strokeRect(0,0,width,height);
},30)
*/

//Bouncing ball

var ball = [];

var randNum = function(){
    return Math.random() * 10 - 5;
}
var randNumBig = function(){
    return Math.random() * 400;
}

var colors = ["Red","Orange","Yellow","Green","Blue","Purple"];
var pickRandColor = function (colors) {
  return colors[Math.floor(Math.random() * colors.length)];
};

var Ball = function(){
    this.x = 7; // or randNumBig();
    this.y = 7; // or randNumBig();
    this.xSpeed = randNum();
    this.ySpeed = randNum();
    this.color = pickRandColor(colors);
};

Ball.prototype.draw = function(){
    ctx.fillStyle = this.color;
    circle(this.x,this.y,6,true);
};

Ball.prototype.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function(){
    if (this.x < 6 || this.x > width - 6){
        this.xSpeed = -this.xSpeed;
    }
    if(this.y < 6 || this.y > height - 6){
        this.ySpeed = -this.ySpeed;
    }
};


for(var i = 0; i < 10; i++){
  ball[i] = new Ball;
}

setInterval(function(){
    ctx.clearRect(0,0,width,height);
    for(var j = 0; j < 10 ; j++){
      ball[j].draw();
      ball[j].move();
      ball[j].checkCollision();
    }
    ctx.strokeRect(0,0,width,height);
  },30);