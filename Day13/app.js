const slideshow = document.getElementById("slideshow");
const posterImage = slideshow.getElementsByTagName("posterimage");
const poster = images[1];
const images = [
  "poster1.png",
  "poster2.png",
  "poster3.png",
  "poster4.png",
  "poster5.png",
];

posterImage.setAttribute("src", images);
let index = 1;
setInterval(function () {
  index++;
  if (index >= images.length) posterImage.setAttribute("src", images[index]);
}, 2000);
