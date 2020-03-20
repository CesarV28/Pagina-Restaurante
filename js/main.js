var slider_content = document.getElementById('box');

// contain images in an array
var image = ['rest-1','rest-2', 'rest-3', 'rest-4','rest-5'];

var i = image.length;


// function for next slide 

function nextImage(){
  if (i<image.length) {
      i= i+1;
  }else{
      i = 1;
  }
    slider_content.innerHTML = "<img src= img/"+image[i-1]+".jpg>";
}

// script for auto image slider

setInterval(nextImage , 3000);