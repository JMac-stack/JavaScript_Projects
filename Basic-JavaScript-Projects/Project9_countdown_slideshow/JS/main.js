// Countdown function.
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

// SlideShow.


// Used to select slide.
var slideIndex = 0

// Function which changes the slide index by +-1 when arrows are pressed.
function moveSlide(n) {
  showSlide(slideIndex += n);
}

// Function loops through all slides and sets display to "none" then takes slideIndex and sets that slide display to "block" making it appear.
function showSlide(n) {

  // Takes all slide elements and makes an array.
  var slides = document.getElementsByClassName("slides"); 

  // Makes sure only indexes 0, 1 and 2 are input.
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  if (n > slides.length - 1) {
    slideIndex = 0;
  }

  // Sets display of all images to "none".
  for ( i = 0; i < slides.length; i++ ) {
    slides[i].style.display = "none";
  }

  // Makes current slide display = "block".
  slides[slideIndex].style.display = "block";
}

showSlide(slideIndex);