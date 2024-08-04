const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
];

let currentIndex = 0;

const imageElements = [
  document.getElementById("image1"),
  document.getElementById("image2"),
  document.getElementById("image3"),
];
const links = [
  document.getElementById("link1"),
  document.getElementById("link2"),
  document.getElementById("link3"),
];

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", showPreviousImages);
nextBtn.addEventListener("click", showNextImages);

function showPreviousImages() {
  currentIndex = currentIndex > 0 ? currentIndex - 3 : images.length - 3;
  updateImages();
}

function showNextImages() {
  currentIndex = currentIndex < images.length - 3 ? currentIndex + 3 : 0;
  updateImages();
}

function updateImages() {
  for (let i = 0; i < 3; i++) {
    imageElements[i].src = images[(currentIndex + i) % images.length];
    links[i].href = images[(currentIndex + i) % images.length];
  }
}

updateImages();
