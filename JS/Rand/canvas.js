  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.lineWidth = 4;
  ctx.strokeStyle = "Black";
/*
//Red Rect in loop
  ctx.fillStyle = "Red";
  for(var i = 0; i < 10; i++){
    ctx.fillRect(i*20,i*20,20,20);
  }

//Funny Man
  ctx.fillRect(20,10,30,30);
  ctx.fillRect(35,40,2,5);
  ctx.fillRect(0,45,70,3);
  ctx.fillRect(15,45,40,35);
  ctx.fillRect(15,80,3,15);
  ctx.fillRect(52,80,3,15);


//Pink Rect
  ctx.strokeStyle = "DeepPink";
  ctx.lineWidth = 4;
  ctx.strokeRect(10,10,100,20);

//Cross
  ctx.strokeStyle = "Turquoise";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(10,10);
  ctx.lineTo(60,60);
  ctx.moveTo(60,10);
  ctx.lineTo(10,60);
  ctx.stroke();

//TV man
  ctx.lineWidth = 4;
  ctx.strokeRect(10,10,20,20);
  ctx.beginPath();
  ctx.moveTo(20,30);
  ctx.lineTo(20,60);
  ctx.moveTo(5,35);
  ctx.lineTo(20,40);
  ctx.moveTo(20,40);
  ctx.lineTo(35,35);
  ctx.moveTo(5,80);
  ctx.lineTo(20,60);
  ctx.moveTo(20,60);
  ctx.lineTo(35,80);
  ctx.stroke();

// Round Shapes
  ctx.lineWidth = 4;
  ctx.strokeStyle = "Green";

  ctx.beginPath();
  ctx.arc(50,50,20,0, Math.PI / 2, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(100,50,20,0, Math.PI , false);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(150,50,20,0, Math.PI*1.5 ,false);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(200,50,20,0, Math.PI * 2 , false);
  ctx.stroke();


// Funny Circle Generator
  var circle = function(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2,false);
    ctx.stroke();
  }

    var i = 1;
    var j = 0;
    var t = 0;


    var colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "deepblue",
      "purple"
    ]

  cicleAnimation = function(){
    ctx.strokeStyle = colors[j];
    circle(960,540,i*4);
    i++;
    j++;
    if( j == 7){
      j = 0;
    }
    t++;
  }


//SnowMan
ctx.lineWidth = 2;
ctx.strokeStyle = "Black";
ctx.fillStyle = "black";

var circle = function(a,b,radius,fillCircle){
    ctx.beginPath();
    ctx.arc(a,b,radius,0,Math.PI*2,false);
    if(fillCircle){
      ctx.fill();
    }else{
      ctx.stroke();
    }
  }

var drawSnowman = function(a,b){
  circle(a,b,20,false);

  circle(a,b+45,25,false);

  circle(a-10,b-2,2,true);

  circle(a+10,b-2,2,true);
  ctx.fillStyle = "Orange";
  circle(a,b+3,2,true);
  ctx.fillStyle = "Black";
  circle(a,b+30,2,true);

  circle(a,b+40,2,true);

  circle(a,b+50,2,true);
}


//function that draws some stuff. Two arrays for example
var points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]];
var mysteryPoints = [[50, 50], [50, 100], [25, 120], [100, 50], [70, 90], [100, 90], [70, 120]];

var i = 0;

var drawPoints = function(array){
  while(i < array.length){
    ctx.beginPath();
    ctx.moveTo(array[i][0],array[i][1]);
    i++;
    ctx.lineTo(array[i][0],array[i][1]);
    ctx.stroke();
    }
  }


// Funny Circle Generator with mouse move upgrade
$("html").mousemove(function(event){
  ctx.strokeStyle = colors[j];
  circle(960,540,i*4);
  i++;
  j++;
  if( j == 7){
    j = 0;
  }
  t++;
})

var circle = function(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2,false);
    ctx.stroke();
  }

    var i = 1;
    var j = 0;
    var t = 0;


    var colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "deepblue",
      "purple"
    ];
*/