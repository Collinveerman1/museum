const button = document.getElementById("js--menu");
const navigation = document.getElementById("js--nav");
const body = document.getElementById("js--body");
const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

button.onclick = function() {
   navigation.style.visibility = "visible";
   navigation.style.opacity = 1;
   body.style.overflow = "hidden";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let locaties = [
   {
       "titel":"plaats 0",
       "image":"img/interactieveroute0.jpeg"
   },
   {
       "titel":"plaats 1",
       "image":"img/interactieveroute1.jpeg"
   },
   {
       "titel":"plaats 2",
       "image":"img/interactieveroute2.jpeg"
   },
   {
       "titel":"plaats 3",
       "image":"img/interactieveroute3.jpeg"
   },
   {
       "titel":"plaats 4",
       "image":"img/interactieveroute4.jpeg"
   },
   {
       "titel":"plaats 5",
       "image":"img/interactieveroute5.jpeg"
   },
   {
       "titel":"plaats 6",
       "image":"img/interactieveroute6.jpeg"
   },
   {
       "titel":"plaats 7",
       "image":"img/interactieveroute7.jpeg"
   },
   {
       "titel":"plaats 8",
       "image":"img/interactieveroute8.jpeg"
   },
   {
       "titel":"plaats 9",
       "image":"img/interactieveroute9.jpeg"
   },
   {
       "titel":"plaats 10",
       "image":"img/interactieveroute10.jpeg"
   },
   {
       "titel":"plaats 11",
       "image":"img/interactieveroute11.jpeg"
   }
];

function show(index){
   myTitle.innerHTML = locaties[index].titel;
   myImage.src = locaties[index].image;
}

function getInput(){
   show(myInput.value);
   //console.log(myInput.value)
   myInput.value = "";
   myInput.focus();
}