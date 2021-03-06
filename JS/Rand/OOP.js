  /*
  var dog = {
    name: "Sandy",
    legs: 4,
    isGoodBoy: true,
    sound: "Woof Woof",
    speak: speak
  };
  
  dog.age = 4;
  
  dog.bark = function(){
    console.log("Woof Woof! My name is " + this.name + "!")
  }
  
  var speak = function(){
    console.log(this.sound + "! My name is " + this.name + "!")
  }
  
  var cat = {
    name: "Kitty",
    sound: "Meow Meow",
    speak: speak
  };
  
  var Car = function(x, y){
    this.x = x;
    this.y = y;
  }
  
  var drawCar = function(car){
    var carHTML = '<img src="https://www.nsbpictures.com/wp-content/uploads/2018/08/3031752_S.png">';
    var carElement = $(carHTML);
    carElement.css({
      position: "absolute",
      left: car.x,
      top: car.y
    });
    $("body").append(carElement);
  };
  */
  

  
  var Car = function(x,y){
    this.x = x;
    this.y = y;
  }
  
  Car.prototype.draw = function (){
    var carHTML = '<img src="https://www.nsbpictures.com/wp-content/uploads/2018/08/3031752_S.png">';
    this.carElement = $(carHTML);
    this.carElement.css({
      position: "absolute",
      left: this.x,
      top: this.y
      });
      
      $("body").append(this.carElement);
  };
  
  var tesla = new Car(0,0);
  var nissan = new Car(0,90);
  
  Car.prototype.moveRight = function(){
    this.x += 15;
    
    this.carElement.css({
      left: this.x,
      top: this.y
    });
  };
  
  tesla.draw();
  nissan.draw();
  
  var animation = function(){
    tesla.moveRight();
    nissan.moveRight();
  }
  
  Car.prototype.moveLeft = function(){
    this.x -= 5;
    
    this.carElement.css({
      left: this.x,
      top: this.y
    });
  };
  
  Car.prototype.moveUp = function(){
    this.y -= 5;
    
    this.carElement.css({
      left: this.x,
      top: this.y
    });
  };
  
  Car.prototype.moveDown = function(){
    this.y += 5;
    
    this.carElement.css({
      left: this.x,
      top: this.y
    });
  };
  
  Car.prototype.randSpeed = function(){
    var rand = function(){
      return Math.floor(Math.random()*10);
      }
    this.x += rand();
    this.carElement.css({
      left: this.x,
      top: this.y
    });
  }
  
  var races = function(){
    tesla.randSpeed();
    nissan.randSpeed();
  }
