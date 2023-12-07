
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('focus', function () {
  searchInput.placeholder = '';
});

searchInput.addEventListener('blur', function () {
  if (searchInput.value === '') {
    searchInput.placeholder = 'O que assistir..';
  }

});
const yearDropdownToggle = document.getElementById("year-dropdown-toggle");
const yearDropdown = document.querySelector(".year-dropdown");

yearDropdownToggle.addEventListener("click", () => {
  yearDropdown.style.display = yearDropdown.style.display === "block" ? "none" : "block";
});

const slide = document.querySelector(".carousel-slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const images = document.querySelectorAll(".carousel-slide img");

let counter = 0;
const imagesPerSlide = 4; 
const slideWidth = slide.clientWidth / imagesPerSlide;
const totalImages = images.length;

function showImages() {
  slide.style.transition = "transform 0.5s ease-in-out";
  slide.style.transform = `translateX(${-counter * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (counter >= totalImages - imagesPerSlide) {
    counter = 0;
  } else {
    counter += imagesPerSlide;
  }
  showImages();
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) {
    counter = totalImages - imagesPerSlide;
  } else {
    counter -= imagesPerSlide;
  }
  showImages();
});

function autoSlide() {
  setInterval(() => {
    if (counter >= totalImages - imagesPerSlide) {
      counter = 0;
    } else {
      counter += imagesPerSlide;
    }
    showImages();
  }, 5000);
}

autoSlide();

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}
