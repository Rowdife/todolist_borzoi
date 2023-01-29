const images = [
  "borzoi1.jpg",
  "borzoi2.jpg",
  "borzoi3.jpg",
  "borzoi3.jpg",
  "borzoi4.jpg",
  "borzoi5.jpg",
  "borzoi6.jpg",
];
const bgimg = document.querySelector(".background-image-container");
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgimg.appendChild(bgImage);
