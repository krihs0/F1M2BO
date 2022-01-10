const myTitle = document.getElementById("myTitle");
const myDescription = document.getElementById("myDescription");

let titles = [
  "Portret van een Man",
  "Portret van een jonge vrouw",
  "Portret van Thomas Gresham",
  "Portretten van Giuliano en Francesco Giamberti da Sangallo",
  "Portret van een Afrikaanse man",
  "Portret van een Man",
  "Portret van een jonge vrouw"
]

let descriptions = [
  "Antonello da Messina was een Italiaans kunstschilder. Zijn bekendste werken zijn Sint-Hiëronymus in zijn studievertrek en Portret van een man.",
  "Er is bijzonder weinig bekend over dit revolutionaire portret van een jonge vrouw uit de late vijftiende eeuw. We weten wel wie de maker is. Het is Petrus Christus (1425-1476), een Vlaamse kunstschilder van de late gotiek. Hij wordt gerekend tot een stijlperiode die men ook wel aanduidt als de periode van de Vlaamse primitieven.",
  "Sir Thomas Gresham (1519-1579) was de belangrijkste Engelse koopman in Antwerpen en tevens de financiële agent van de Engelse koning in de Lage Landen. Hij en zijn vrouw, Anne Fernely, zijn duur, maar sober gekleed. Hun status blijkt ook uit de keuze van de schilder: Anthonis Mor was een van de meest vooraanstaande portrettisten van zijn tijd en hofschilder van de Spaanse koning.",
  "Op dit uitzonderlijke tweeluik is de vooraanstaande Florentijnse architect Giuliano da Sangallo geportretteerd met zijn pas overleden vader Francesco, die architect en musicus was. Ze behoren tot de vroegste voorbeelden van portretten waarin het beroep van de afgebeelden centraal staat. Pen en passer duiden op de bouwkunst, het blad met noten op de muziek; beide kunsten zijn gebaseerd op harmonie en verhoudingen.",
  "Dit is het enige bekende portret van een zwarte man in de vroege Europese schilderkunst. Mogelijk heeft hij gediend aan het Brusselse hof van keizer Karel V, die een zwarte boogschutter genaamd Christophle le More onder zijn lijfwachten had. Het insigne van de Maagd op zijn pet is een souvenir van een bedevaart naar Halle (Brabant), een favoriete bestemming van pelgrims van het Brusselse hof.",
  "Antonello da Messina was een Italiaans kunstschilder. Zijn bekendste werken zijn Sint-Hiëronymus in zijn studievertrek en Portret van een man.",
  "Er is bijzonder weinig bekend over dit revolutionaire portret van een jonge vrouw uit de late vijftiende eeuw. We weten wel wie de maker is. Het is Petrus Christus (1425-1476), een Vlaamse kunstschilder van de late gotiek. Hij wordt gerekend tot een stijlperiode die men ook wel aanduidt als de periode van de Vlaamse primitieven."
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