const imgArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpeg"];
const arrayLength = imgArray.length;

let i = 0;

const demoFunction = () => {
  i++;
  i = i % arrayLength;
  document.querySelector("img").src = `images/${imgArray[i]}`;
};

let set = setInterval(demoFunction, 2000);

const right = document.querySelector(".right");
const left = document.querySelector(".left");

right.addEventListener("click", () => {
  i++;
  i = i % arrayLength;
  document.querySelector("img").src = `images/${imgArray[i]}`;
});
left.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = arrayLength - 1;
  }
  // i = (i + arrayLength) % arrayLength;
  document.querySelector("img").src = `images/${imgArray[i]}`;
});

const container = document.querySelector(".container");
container.addEventListener("mouseover", () => {
  clearInterval(set);
});
container.addEventListener("mouseout", () => {
  set = setInterval(demoFunction, 2000);
});
