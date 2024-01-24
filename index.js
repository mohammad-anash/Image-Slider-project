const image = document.querySelector(".update-Image");
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");
const names = document.querySelector(".update-name");

const imageUrlArray = [
  "https://images.unsplash.com/photo-1551022372-0bdac482b9d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1706012160952-ddfc2de218fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
];

const UpdateName = ["Abu Andrew", "Kyle sympson", "John Mathew", "David"];

let nextCounter = 0;

function UpdateImage() {
  console.log((image.src = imageUrlArray[nextCounter]));
  console.log((names.innerText = UpdateName[nextCounter]));
  nextCounter++;
  if (nextCounter >= imageUrlArray.length) {
    nextCounter = 0;
  }
}

nextButton.addEventListener("click", UpdateImage);

let previousCounter = nextCounter;

function previousImage() {
  image.src = imageUrlArray[previousCounter];
  names.innerText = UpdateName[previousCounter];
  console.log(previousCounter--);
  if (previousCounter < 0) {
    previousCounter = imageUrlArray.length - 1;
  }
}

previousButton.addEventListener("click", previousImage);
