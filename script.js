var width = 720;
var parent = document.getElementById('main-con')
parent.style.width = width + 'px';
var slideIntervalID, leftSliderID, rightSliderID, slideTimer;
var ele = document.querySelector('.carousel-image-wrapper');
var carouselChildren = ele.children;

var firstNode = carouselChildren[0].cloneNode(true);

ele.appendChild(firstNode);
var wrapperWidth = width * carouselChildren.length;
console.log(wrapperWidth);

ele.style.width = wrapperWidth + 'px';
var x =0;
var substract = -1;
next_button.onclick = slideNext;
prev_button.onclick = slidePrev;
function slideNext(){
    clearInterval(slideIntervalID);
    clearTimeout(slideTimer);
    clearInterval(rightSliderID);
    var leftSliderID = setInterval(function(){
        x += substract;
        if (Math.abs(x) % width === 0){
            clearInterval(leftSliderID);
            setTimeout(slideIntervalID,2000);
            console.log(x);
    }
      else{
        ele.style.marginLeft = x + 'px';}
    },10/60)
}

var add = 1;
function slidePrev(){
  clearInterval(slideIntervalID);
  clearTimeout(slideTimer);
  clearInterval(leftSliderID);
    var rightSliderID = setInterval(function(){
        x += add;
        if (Math.abs(x) % width === 0){
            clearInterval(rightSliderID);
            setTimeout(slideIntervalID,2000);
        }
        else {
            ele.style.marginLeft = x + 'px';
        }
    }, 10/60)
}

function slide() {
    slideIntervalID = setInterval(function (){
        x += substract;
        if (Math.abs(x) % (wrapperWidth-width) === 0){
            x=0;
            clearInterval(slideIntervalID);
            setTimeout(slide, 2000);
        }
        else if (Math.abs(x) % width === 0){
          clearInterval(slideIntervalID);
          var slideTimer = setTimeout(slide, 2000);
      }
        
        else{
          ele.style.marginLeft = x + 'px';}
    },10/60);
}
setTimeout(slide, 2000);





