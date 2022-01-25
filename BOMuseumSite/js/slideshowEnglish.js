const myTitle = document.getElementById("myTitle");
const myDescription = document.getElementById("myDescription");

let titles = [
  "Portrait of a man",
  "Portrait of a young woman",
  "Portrait of Thomas Gresham",
  "Portraits of Giuliano and Francesco Giamberti da Sangallo",
  "Portrait of an African man",
  "Portrait of a Man",
  "Portrait of a young woman"
]

let descriptions = [
  "Antonello da Messina was an Italian painter. His most famous works are Sint-Hiëronymus and Portret of a man.",
  "There isn't a lot of information about the revolutionary painting from the late fifteenth century. We do know who made the painting. It's Petrus Christus (1425-1476), a Vlaamse painter from the late gotiek. He can also be recognized by the weird way he paints, that indicates that he's from that time.",
  "Sir Thomas Gresham (1519-1579) was the most important English trader in Antwerpen and also the financial agent of the English king in The Netherlands. Him and his wife, Anne Fernely, are expensive, but casualy clothed. Their status is also seen in the painter that they chose: Anthonis Mor was one of the best at the time painters and also rolay painter fo the Spanish king.",
  "On this beatiful painting the Florentinian architect Giuliano da Sangallo is portraid with his dad that just passed before making this painting, that was a architect and musician. They belong to one of the earliest examples of portrets where their profecian was the central piece. Pen and treomitry pen point at the fact that they're architects, the piece of paper with music notes points at music; both are revolutionary.",
  "This is the onl;y know painting of a black guy in the early Europian paintings. He possibly could have served Karel the 5th, that had a black archer named Christophle le More as one of his bodyguards. The insignia of The Virgin on his cap is a souvenir from a trip to Halle (Brabant), a favorite tourist destination from people that we're in the court that served Karel the 5th.",
  "Antonello da Messina was an Italian painter. His most famous works are Sint-Hiëronymus and Portret of a man.",
  "There isn't a lot of information about the revolutionary painting from the late fifteenth century. We do know who made the painting. It's Petrus Christus (1425-1476), a Vlaamse painter from the late gotiek. He can also be recognized by the weird way he paints, that indicates that he's from that time."
]

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
  console.log(n)
  myTitle.innerHTML = titles[n];
  myDescription.innerHTML = descriptions[n];
}

function onClickNL(){
  window.location.assign("index.html");
}

function DayNight(){
  alert("in development")
}