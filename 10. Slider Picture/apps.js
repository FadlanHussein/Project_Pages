const slides = document.querySelector(".slides")
const slideImages = document.querySelectorAll(".slide")
const prevButton = document.querySelector("#prev")
const nextButton = document.querySelector("#next")
const dotsContainer = document.querySelector(".slider-dots");

let currentIndex=0
const totalSlider=slideImages.length

createDots();
updateDots();

function updateslider(){
    slides.style.transform = `translateX(-${currentIndex * 100}%)`
}
function  showNextSlide(){
    currentIndex=(currentIndex+1)%totalSlider
    updateslider()
}


nextButton.addEventListener("click",()=>{
    showNextSlide()
})
function showprevSlide(){
    currentIndex = (currentIndex - 1 + totalSlider)%totalSlider
    updateslider()
}
prevButton.addEventListener("click",showprevSlide)

dotsContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("dot")) {
      currentIndex = +e.target.dataset.slide;
      updateSlider();
    }
  });
  
  // Fungsi pembuat dot
  function createDots() {
    slideImages.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dot" data-slide="${i}"></button>`
      );
    });
  }
  
  // Fungsi update dot aktif
  function updateDots() {
    document.querySelectorAll(".dot").forEach(dot => {
      dot.classList.toggle("active", +dot.dataset.slide === currentIndex);
    });
  }
  