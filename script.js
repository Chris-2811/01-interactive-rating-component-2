const submit = document.querySelector(".submit");
const ratingCard = document.querySelector(".rating-card");
const thankyouCard = document.querySelector(".thankyou-card");
const ratingButtons = document.querySelectorAll(".rating");
const selectedStars = document.querySelector(".selectedStars");

submit.addEventListener("click", openModal);

function openModal(e) {
  ratingCard.style.display = "none";
  thankyouCard.style.display = "block";
  selectedStars.textContent = `You have selected ${selectedValue} out of 5`;
}

let selectedValue = 0;

ratingButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    ratingButtons.forEach((element) => {
      element.classList.remove("selected");
    });
    e.currentTarget.classList.add("selected");
    selectedValue = e.currentTarget.value;
  });
});
