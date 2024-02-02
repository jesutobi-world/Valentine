let modal;
let card;
let close = document.getElementById('close');
let body = document.getElementById('body');

function showModal(imageNumber) {
    card = document.getElementById(`card${imageNumber}`);
    modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    card.classList.remove('hidden');
    body.classList.add('overflow-hidden');
}

close.onclick = function(event) {
        modal.classList.add('hidden');
        card.classList.add('hidden');
        body.classList.remove('overflow-hidden');
};





let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 2000);
}




var typed = new Typed(".auto-type", {
  strings: ['Click on image to reveal reason...'],
  typeSpeed: 200,
  backSpeed: 150,
  loop: true
});