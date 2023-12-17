//Storing image and text elements

const image = document.querySelectorAll("img");
const texts = document.querySelectorAll("p");

//Looping through the images and when clicked removing active and show classes from all the images and texts and finally adding active class to the clicked image and show class to the next sibling text

image.forEach((item) => {
  item.addEventListener("click", () => {
    const text = item.nextElementSibling;
    removeActiveClass();
    removeShowClass();
    item.classList.add("active");
    text.classList.add("show");
  });
});

//Function for removing active class
function removeActiveClass() {
  image.forEach((item) => {
    item.classList.remove("active");
  });
}

//Function for removing show class
function removeShowClass() {
  texts.forEach((item) => {
    item.classList.remove("show");
  });
}
