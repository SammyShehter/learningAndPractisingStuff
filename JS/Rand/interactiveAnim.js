    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var width = canvas.width;
    var height = canvas.height;
    var circle = function (a, b, radius, fillCircle) {
      ctx.beginPath();
      ctx.arc(a, b, radius, 0, Math.PI * 2, false)
      if (fillCircle) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
    var Ball = function () {
      this.x = width / 2;
      this.y = height / 2;
      this.speed = 1;
      this.xSpeed = 1;
      this.ySpeed = 0;
      this.shape = 5;
      this.accel = 1;
    };
    Ball.prototype.move = function () {
      this.speed = this.accel; // Turn off this rule if you want to play with gears
      this.x += this.xSpeed * this.speed;
      this.y += this.ySpeed * this.speed;
      // No collision
      if (this.x < 0) {
        this.x = width;
      } else if (this.x > width) {
        this.x = 0;
      }
      if (this.y < 0) {
        this.y = height;
      } else if (this.y > height) {
        this.y = 0;
      }
    }
    /*
    // Collision
      if(this.x < 0 || this.x > width){
       this.xSpeed = -this.xSpeed;
      }
      if(this.y < 0 || this.y > height){
       this.ySpeed = -this.ySpeed;
      }
    }
    */
    Ball.prototype.draw = function () {
      circle(this.x, this.y, this.shape, true)
    }
    Ball.prototype.setDirection = function (direction) {

      if (direction === "up") {
        this.xSpeed = 0;
        this.ySpeed = -this.speed;
      } else if (direction === "down") {
        this.xSpeed = 0;
        this.ySpeed = this.speed;
      } else if (direction === "left") {
        this.xSpeed = -this.speed;
        this.ySpeed = 0;
      } else if (direction === "right") {
        this.xSpeed = this.speed;
        this.ySpeed = 0;
      } else if (direction === "stop") {
        this.xSpeed = 0;
        this.ySpeed = 0;
      }
    }

    var ball = new Ball(); //main obj
    
    var keyNames = {
      32: "stop",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      90: "z",
      88: "x",
      97: 1,
      98: 2,
      99: 3,
      100: 4,
      101: 5,
      102: 6,
      103: 7,
      104: 8,
      105: 9,
      67: "c",
      86: "v"
    }
    //Speeds
    Ball.prototype.setGear = function (gear) {
      if (gear !== undefined) {
        this.speed = gear;
      }
    }

    //Shapes
    Ball.prototype.setShape = function (shape) {
      if (shape === "c") {
        this.shape--;
      } else if (shape === "v") {
        this.shape++;
      }

      if(this.shape == 0){
        this.shape++;
      }
    }

    //Acceleration
    Ball.prototype.setAccel = function (accel) {
      if (accel === "z") {
        this.accel--;
      } else if (accel === "x") {
        this.accel++;
      }

      if(this.accel == -1){
        this.accel++;
      }
    }

    //main
    $("body").keydown(function (event) {
      var direction = keyNames[event.keyCode];
      var gear = keyNames[event.keyCode];
      var shape = keyNames[event.keyCode];
      var accel = keyNames[event.keyCode];
      ball.setDirection(direction);
      ball.setGear(gear);
      ball.setShape(shape);
      ball.setAccel(accel);
    });
    setInterval(function () {
      ctx.clearRect(0, 0, width, height);
      ball.draw();
      ball.move();
      ctx.strokeRect(0, 0, width, height);
    }, 30);