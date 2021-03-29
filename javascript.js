/*var slides=document.querySelector('.slider-items').children;
var prevSlide=document.querySelector('.control-left');
var nextSlide=document.querySelector('.control-right');
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
	next("next");
}
prevSlide.onclick=function () {
	next("prev");
}

function next(direction){

     if(direction=="next"){
     	index++;
     	if(index==totalSlides){
     		index=0;
     	}
     }
    else{
    	if(index==0){
    		index=totalSlides-1;
    	}
    	else{
    		index--;
    	}
    }

   for(i=0;i<slides.length;i++){
   	   slides[i].classList.remove("active");
   }
   slides[index].classList.add("active");

}*/

 function main_page(){
	   
	window.open("https://determined-minsky-7ae0c1.netlify.app/");
 }

 var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}