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
       "titel":"De Metaale Pot, Bloempiramides, ca. 1692-1700",
       "image":"img/interactieveroute0.jpeg"
   },
   {
       "titel":"Pierre Cuypers, Voorhal, 1885",
       "image":"img/interactieveroute1.jpeg"
   },
   {
       "titel":"Frans Hals, Isaac Massa/Beatrix van der Laen, ca. 1622",
       "image":"img/interactieveroute2.jpeg"
   },
   {
       "titel":"Jan Steen, Sint-Nicolaasfeest, 1665-1668",
       "image":"img/interactieveroute3.jpeg"
   },
   {
       "titel":"Johannes Vermeer, Melkmeisje, ca. 1660",
       "image":"img/interactieveroute4.jpeg"
   },
   {
       "titel":"Jan Asselijn, Bedreigde zwaan, ca. 1650",
       "image":"img/interactieveroute5.jpeg"
   },
   {
       "titel":"Rembrandt van Rijn, Joodse bruidje, ca. 1665-1669",
       "image":"img/interactieveroute6.jpeg"
   },
   {
       "titel":"Rembrandt van Rijn, Nachtwacht, 1642",
       "image":"img/interactieveroute7.jpeg"
   },
   {
       "titel":"Adriaen de Vriend/Corn. Moesman, William Rex, 1698",
       "image":"img/interactieveroute8.jpeg"
   },
   {
       "titel":"Pierre Cuypers, Bibliotheek, 1885. Stiltezone",
       "image":"img/interactieveroute9.jpeg"
   },
   {
       "titel":"Bartholomeus van der Helst, Gerard Bicker, ca. 1642",
       "image":"img/interactieveroute10.jpeg"
   },
   {
       "titel":"Poppenhuis Oortman, ca. 1686-1710",
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