//All: 
//animation: "scramble", "rotate", "hueChange", "none"
//shape: star, circle, triangle, square
//size: 1-5
//bumber
//sound
//color

//Star:
//points

var secretCode = "cat";

var keyData = {
    q: {
        sound: new Howl({
          src: ['sounds/bubbles.mp3']
        }),
        color: '#1abc9c',
        shape: "star",
        size: 3,
        number: 5,
        animation: "scramble",
        points: 6

    },
    w: {
        sound: new Howl({
          src: ['sounds/clay.mp3']
        }),
        color: '#2ecc71',
        shape: "circle",
        size: 5,
        number: 1,
        animation: "rotate"
    },
    e: {
        sound: new Howl({
          src: ['sounds/confetti.mp3']
        }),
        color: '#3498db',
        shape: "triangle",
        size: 2,
        number: 6,
        animation: "hueChange"
    },
    r: {
        sound: new Howl({
          src: ['sounds/corona.mp3']
        }),
        color: '#9b59b6',
        shape: "Square",
        size: 3,
        number: 6,
        animation: "none"
    },
        t: {
        sound: new Howl({
          src: ['sounds/dotted-spiral.mp3']
        }),
        color: '#34495e',
        shape: "Star",
        size: 5,
        number: 6,
        points: 8,
        animation: "rotate"
    },
    y: {
        sound: new Howl({
          src: ['sounds/flash-1.mp3']
        }),
        color: '#16a085',
        shape: "Star",
        size: 3,
        number: 6,
        points: 7
    },
    u: {
        sound: new Howl({
          src: ['sounds/flash-2.mp3']
        }),
        color: '#27ae60',
        shape: "Square",
        size: 8,
        number: 6
    },
    i: {
        sound: new Howl({
          src: ['sounds/flash-3.mp3']
        }),
        color: '#2980b9',
        shape: "Square",
        size: 3,
        number: 6
    },
    o: {
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        }),
        color: '#8e44ad',
        shape: "Square",
        size: 3,
        number: 6
    },
    p: {
        sound: new Howl({
          src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50',
        shape: "Star",
        size: 3,
        number: 6,
        points: 5
    },
    a: {
        sound: new Howl({
          src: ['sounds/pinwheel.mp3']
        }),
        color: '#f1c40f',
        shape: "Square",
        size: 3,
        number: 6
    },
    s: {
        sound: new Howl({
          src: ['sounds/piston-1.mp3']
        }),
        color: '#e67e22',
        shape: "Square",
        size: 3,
        number: 6
    },
        d: {
        sound: new Howl({
          src: ['sounds/piston-2.mp3']
        }),
        color: '#e74c3c',
        shape: "Square",
        size: 3,
        number: 6
    },
    f: {
        sound: new Howl({
          src: ['sounds/prism-1.mp3']
        }),
        color: '#95a5a6',
        shape: "Square",
        size: 3,
        number: 6
    },
    g: {
        sound: new Howl({
          src: ['sounds/prism-2.mp3']
        }),
        color: '#f39c12',
        shape: "Square",
        size: 3,
        number: 6
    },
    h: {
        sound: new Howl({
          src: ['sounds/prism-3.mp3']
        }),
        color: '#d35400',
        shape: "Square",
        size: 3,
        number: 6
    },
    j: {
        sound: new Howl({
          src: ['sounds/splits.mp3']
        }),
        color: '#1abc9c',
        shape: "Square",
        size: 3,
        number: 6
    },
    k: {
        sound: new Howl({
          src: ['sounds/squiggle.mp3']
        }),
        color: '#2ecc71',
        shape: "Square",
        size: 3,
        number: 6
    },
    l: {
        sound: new Howl({
          src: ['sounds/strike.mp3']
        }),
        color: '#3498db',
        shape: "Square",
        size: 3,
        number: 6
    },
    z: {
        sound: new Howl({
          src: ['sounds/suspension.mp3']
        }),
        color: '#9b59b6',
        shape: "Square",
        size: 3,
        number: 6
    },
    x: {
        sound: new Howl({
          src: ['sounds/timer.mp3']
        }),
        color: '#34495e',
        shape: "Square",
        size: 3,
        number: 6
    },
    c: {
        sound: new Howl({
          src: ['sounds/ufo.mp3']
        }),
        color: '#16a085',
        shape: "Square",
        size: 3,
        number: 6
    },
    v: {
        sound: new Howl({
          src: ['sounds/veil.mp3']
        }),
        color: '#27ae60',
        shape: "Square",
        size: 3,
        number: 6
    },
    b: {
        sound: new Howl({
          src: ['sounds/wipe.mp3']
        }),
        color: '#2980b9',
        shape: "Square",
        size: 3,
        number: 6
    },
    n: {
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        }),
        color: '#8e44ad',
        shape: "Square",
        size: 3,
        number: 6
    },
    m: {
        sound: new Howl({
          src: ['sounds/moon.mp3']
        }),
        color: '#2c3e50',
        shape: "Square",
        size: 3,
        number: 6
    }
}   


parseCode(secretCode);
var shapes = [];

function onKeyDown(event){
    if(keyData[event.key]){
        //use view element to obtain max width and height
        keyData[event.key].sound.play();
        var maxPoint = new Point(view.size.width, view.size.height);
        
        
        for (var x = 0; x < keyData[event.key].number; ++x){
              // var newShape;
             
               if (keyData[event.key].shape == "square"){
                  generateSquare(keyData[event.key].color, keyData[event.key].size, maxPoint, keyData[event.key].animation);
                }
                
                else if (keyData[event.key].shape == "triangle"){
                  generateTriangle(keyData[event.key].color, keyData[event.key].size, maxPoint, keyData[event.key].animation);
                }
                
                else if (keyData[event.key].shape == "circle"){
                  generateCircle(keyData[event.key].color, keyData[event.key].size, maxPoint, keyData[event.key].animation);
                }
                
                else if (keyData[event.key].shape == "star"){
                  generateStar(keyData[event.key].color, keyData[event.key].size, keyData[event.key].points, maxPoint, keyData[event.key].animation);
                }

              
       

}
    
}
}







function generateStar(color, size, points, maxPoint, animation)
{
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var starSize = 75 * size;
  // var newStar = new Path.Star(point, points, starSize, Math.round(starSize/2));
  var newStar = new Path.Star(point, points, starSize, Math.round(starSize/2));
  newStar.fillColor = color;
  assignAnimation(newStar, animation);
  return newStar;
}

function generateCircle(color, size, maxPoint, animation)
{
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var newCircle = new Path.Circle(point, size * 75);
  newCircle.fillColor = color;
  assignAnimation(newCircle, animation);
  console.log(newCircle);
  return newCircle;


}


function generateTriangle(color, size, maxPoint, animation)
{
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var newTriangle = new Path.RegularPolygon(point, 3, size * 75);
  newTriangle.fillColor = color;
  assignAnimation(newTriangle, animation);
  return newTriangle;


}



function generateSquare(color, size, maxPoint, animation){
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var newSquare = new Path.RegularPolygon(point, 4, size * 75);
  newSquare.fillColor = color;
  assignAnimation(newSquare, animation);
  return newSquare;

}


function assignAnimation(object, animation){


  if (animation == "hueChange"){
    object.onFrame = function(event){
    
    object.fillColor.hue += 1;
    //all shapes shrink and are removed eventually
    object.scale(.95); 
    if (object.area < 1){
      object.remove(); // remove the circle from the canvas
      // shapes.splice(i, 1); // remove the circle from the array
    }

  }

}

else if (animation == "rotate"){
  object.onFrame = function(event){
    
    object.rotate(3);
    //all shapes shrink  objectmoved eventually
    object.scale(.95); 
    if (object.area < 1){
      object.remove(); // remove the circle from the canvas
      // shapes.splice(i, 1); // remove the circle from the array
    }

  }

}


else if (animation == "scramble"){
  
 object.onFrame = function(event){
    var destination = Point.random() * view.size;
    var vector = destination - object.position;
   object.position += vector/30;


    //all shapes shrink and are removed eventually
    object.scale(.95); 
    if (object.area < 1){
     object.remove(); // remove the circle from the canvas
    }

  }

}
  else{
   object.onFrame = function(event){
  
      //all shapes shrink and are removed eventually
     object.scale(.95); 
      if (object.area < 1){
       object.remove(); // remove the circle from the canvas
        // shapes.splice(i, 1); // remove the circle from the array
      }
    }
  }
}



function parseCode(code){
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
    len = alphabet.length,
    i;

  for (i = 0; i < len; ++i) {
    console.log(alphabet[i], alphabet[i].charCodeAt(0) - 32);
} 
  var chars = code.split("");
  var object = {};
  for (var x = 0; x < chars.length; ++x){

}
}