/**
 * Project: UdemySchool.
 * By: Ronny Rosabal
 * Date: 6/12/15
 * Time: 6:33 PM
 * Content: external javascript file that goes with reaction.html file
 */

/**************************************
TABLE OF CONTENT
***************************************/
/*
* #GLOBAL VARIABLES
*   ~window variables
*   ~shape variables
*   ~time variables
*
* #FUNCTIONS
*   ~changes shape
*   ~changes top position
*   ~changes left position
*   ~changes shape color
*   ~creates shape
*   ~makes shape disappear
*   ~calculates reaction time
*   ~calculates slowest time
*   ~calculates fastest time
*   ~calculates average time
*
*
*
 */


/**************************************
#GLOBAL VARIABLES
***************************************/

/* window variables */

var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var bodyTag = document.getElementsByTagName('body')[0];
var bodyWidth = bodyTag.offsetWidth;

/* ~shape variables */

var shapeId = document.getElementById('shape');
var shapeWidth = shapeId.offsetWidth;
var shapeHeight = shapeId.offsetHeight;
var start = document.getElementById('start');
var stop = document.getElementById('stop');

/* ~time variables */

var time = Math.random();
time = time * 5000;
var clickedTime; var createdTime; var reactionTime; var averageTime; var slowestTime; var fastestTime; var totalTime = 0;


var counter = 0;
var flag = true;


/**************************************
#FUNCTIONS
***************************************/

/* ~changes shape*/

function getRandomRadius(){
  var radius = Math.random();
  var percent = "%";
  radius = radius * 51;

  return radius + percent;
}

/* ~changes top position */

function getTopPosition(){
  var topPosition = Math.random();
  var pixel = "px";
  topPosition = topPosition * (windowHeight - shapeHeight);

  return topPosition + pixel;
}

/* ~changes left position */

function getLeftPosition(){
  var leftPosition = Math.random();
  var pixel = "px";
  leftPosition = leftPosition * (bodyWidth - shapeWidth);

  return leftPosition + pixel;
}

/* ~changes shape color */

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/* ~creates shape */

function makeShape(){

  setTimeout(function(){

    shapeId.style.display = "block";
    shapeId.style.top = getTopPosition();
    shapeId.style.left = getLeftPosition();
    shapeId.style.borderRadius = getRandomRadius();
    shapeId.style.backgroundColor = getRandomColor();
    createdTime = Date.now();

  }, time);


}

/* ~makes shape disappear */

function shapeDisappear(){

  shapeId.style.display = "none";

}

/* ~calculates reaction time */

function calcReaction(){

  reactionTime = (clickedTime - createdTime) / 1000;

  document.getElementById('reactionTime').innerHTML = reactionTime + "s";

}

/* ~calculates slowest time */

function calcSlowest(){

  if(document.getElementById('slowestTime').innerHTML == parseInt("0.000")){

    slowestTime = reactionTime;

  }else if(slowestTime < reactionTime){

    slowestTime = reactionTime;

  }

  document.getElementById('slowestTime').innerHTML = slowestTime + "s";

}

/* ~calculates fastest time */

function calcFastest(){

  if(document.getElementById('fastestTime').innerHTML == parseInt("0.000")){

    fastestTime = reactionTime;

  }else if(fastestTime > reactionTime){

    fastestTime = reactionTime;

  }

  document.getElementById('fastestTime').innerHTML = fastestTime + "s";

}

/* ~calculates average time */

function calcAverage(){

  averageTime = totalTime / counter;
  averageTime = averageTime.toFixed(3);

  document.getElementById('averageTime').innerHTML = averageTime + "s";

}



/**************************************
#FUNCTION CALLS
***************************************/

start.onclick = function(){

  if(flag){
    makeShape();
  }

};

stop.onclick = function(){
  flag = false;
};

shapeId.onclick = function(){

  shapeDisappear();
  clickedTime = Date.now();
  counter++;
  calcReaction();
  totalTime += reactionTime;
  calcSlowest();
  calcFastest();
  calcAverage();
  makeShape();

};