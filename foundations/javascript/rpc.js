const userChoice = document.querySelector(".choice");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const submitBtn = document.querySelector("#submit");

const updateChoice = (choice) => {
  userChoice.innerHTML = choice;
};

// const addEvent = (btn, choice) => {
//   btn.addEventListener("click", updateChoice(choice));
// };

// addEvent(rockBtn, "rock");

const choice = undefined;

rockBtn.addEventListener("click", (e) => {
  e.preventDefault();
  updateChoice(e.target.innerHTML);
  choice = e.target.innerHTML;
});

paperBtn.addEventListener("click", (e) => {
  e.preventDefault();
  updateChoice(e.target.innerHTML);
  choice = e.target.innerHTML;
});

scissorBtn.addEventListener("click", (e) => {
  e.preventDefault();
  updateChoice(e.target.innerHTML);
  choice = e.target.innerHTML;
});

submitBtn.addEventListener("click", (e) => {});
