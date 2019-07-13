var artArray = [];
var choice = 'pata';

document.getElementById("pata").style.color = '#d3d3d3'


// Add the art button click listener here!

document.getElementById("artMaker").addEventListener("click", function(){
  document.getElementById("artMaker").style.color = '#d3d3d3'
  document.getElementById("pata").style.color = 'white'
  choice = 'art';
});


// All Set!


document.getElementById("pata").addEventListener("click", function(){
  document.getElementById("pata").style.color = '#d3d3d3'
  document.getElementById("artMaker").style.color = 'white'
  choice = 'pata';
  resetArtArray();
});



// Add secret code logic here!


parsedCode = secretCode.split('');
codeMap = {};
var shapes = [];

for (var i = 0; i < parsedCode.length; ++i){
  codeMap[parsedCode[i]] = false;
}


// All set! 
function onKeyDown(event){
  var notCode = false;
  if (parsedCode.indexOf(event.key) >= 0 && choice == 'pata'){
    codeMap[event.key] = true
    var proceed = true;
    var values = Object.values(codeMap);
    for (var x = 0; x < values.length; ++x){
      if (!values[x]){
        proceed = false;
          }
        }

      if (proceed){
        sound = new Howl({
        src: ['sounds/glimmer.mp3']
        });

        sound.play();
        var text = new PointText(view.center);
        text.content = firstLastName;
        text.style = {
          fontFamily: 'Arial',
          fontWeight: '800',
          fontSize: view.size.width/4,
          fillColor: 'Blue',
          justification: 'center'
          };

        var maxPoint = new Point(view.size.width, view.size.height);
        for (var y = 0; y < 20; ++y){
          generateStar("yellow", 3, 5, maxPoint, "scramble");
        }
        
        if (choice != "art"){
          text.onFrame = function (event){
          text.rotate(1);
          text.fillColor.hue += 4;
          text.scale(.98);
          text.fontSize -= 3;
          if (text.fontSize < 1){
            text.remove(); 

            }}}}
          else{
            notCode = true;
          }
    }


  else{
      notCode = true;
    }

  if (keyData[event.key] && notCode){
    keyData[event.key].sound.play();
    var maxPoint = new Point(view.size.width, view.size.height);
    for (var x = 0; x < keyData[event.key].number; ++x){
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
      }}}}




//functions

function onKeyUp(event){
  if (parsedCode.indexOf(event.key) >= 0){
    codeMap[event.key] = false;
  }
}

function generateStar(color, size, points, maxPoint, animation)
{
  if (choice == 'art'){
    size = size/5;
  }
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var starSize = 75 * size;
  // var newStar = new Path.Star(point, points, starSize, Math.round(starSize/2));
  var newStar = new Path.Star(point, points, starSize, Math.round(starSize/2));
  newStar.fillColor = color;
  if (choice != 'art'){
    assignAnimation(newStar, animation);
    return newStar;

  }

  else{
    artArray.push(newStar);
  }
}

function generateCircle(color, size, maxPoint, animation)
{
  if (choice == 'art'){
    size = size/5;
  }
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var newCircle = new Path.Circle(point, size * 75);
  newCircle.fillColor = color;
  if (choice != 'art'){
    assignAnimation(newCircle, animation);
    return newCircle;

  }

  else{
    artArray.push(newCircle);
  }
}

function generateTriangle(color, size, maxPoint, animation)
{
  if (choice == 'art'){
    size = size/5;
  }
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var newTriangle = new Path.RegularPolygon(point, 3, size * 75);
  newTriangle.fillColor = color;
  if (choice != 'art'){
    assignAnimation(newTriangle, animation);
    return newTriangle;
  }

  else{
    artArray.push(newTriangle);
  }
}

function generateSquare(color, size, maxPoint, animation){
  if (choice =='art'){
    size = size/5;
  }
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var newSquare = new Path.RegularPolygon(point, 4, size * 75);
  newSquare.fillColor = color;
  if (choice != 'art'){
  assignAnimation(newSquare, animation);
  return newSquare;
  }
  else{
    artArray.push(newSquare);

}
}


//animations

function assignAnimation(object, animation){
  //add rotate animation here!
  
  if (animation == "rotate"){
    object.onFrame = function(event){
    object.rotate(3);
    //all shapes shrink are removed eventually
    object.scale(.95); 
    if (object.area < 1){
      object.remove(); // remove the circle from the canvas
      // shapes.splice(i, 1); // remove the circle from the array
      }
    }
  }



//all set!

else if (animation == "hueChange"){
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

function resetArtArray(){
  for (var x = 0; x < artArray.length; ++x){
    artArray[x].remove();
  }

  artArray = [];
}