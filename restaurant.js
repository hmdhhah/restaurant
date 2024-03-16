let myfunction = () => {
  const perdetails = document.getElementById("nopeople");
  const toggleButton = document.getElementById("toggle");
  const arrowIcon = toggleButton.querySelector(".arrow");
  if (arrowIcon.classList.contains("up")) {
    arrowIcon.classList.toggle("up");
    arrowIcon.classList.toggle("down");
    perdetails.style.display = "none";
  } else {
    arrowIcon.classList.toggle("up");
    arrowIcon.classList.toggle("down");
    perdetails.style.display = "block";
  }
};
let userselectednumber;

let fchangevalue = (value) => {
  const count = document.getElementById("text-people");
  count.textContent = value + " People";

  let zeroButtons = document.getElementsByClassName("zero");
  for (let button of zeroButtons) {
    button.style.backgroundColor = "black";
  }

  // Change background color of the clicked button
  // console.log(`.zero[value="${value}"]`)
  let clickedButton = document.querySelector(`.zero[value="${value}"]`);
  if (clickedButton) {
    clickedButton.style.backgroundColor = "#ccae17";
    userselectednumber = value;
  }
  document.getElementById("usernumber").innerText=value +" "+"People";
};


document.addEventListener('DOMContentLoaded', function  () {
  let buttons = document.querySelectorAll(".btn");
  let selectedButton =null;

  for (let button of buttons) {
    button.addEventListener('click', (event) => {
      if (buttons[0]!==event.target){
        buttons[0].style.backgroundColor="";
      }
      if (selectedButton) {
        selectedButton.style.backgroundColor = ""; // Deselect the previously selected button
      }

      event.target.style.backgroundColor = '#ccae17';
      selectedButton = event.target; // Update the selected button
      document.getElementById("userselectedtime").innerText=event.target.value;
    });
  }
});

document.addEventListener('DOMContentLoaded', function  () {
  let currentDate = new Date();
  const monthsName = ["January","February","March","april","May","June","July","August","September","October","November","December"];
  let currentMonth = monthsName[currentDate.getMonth()];
  let currentDay = currentDate.getDate();
  let userselecteddate = `${currentMonth} ${currentDay}`;
  document.getElementById("currentday").innerText= userselecteddate
})


let confirmpge = () => {
  let conformation = document.getElementsByClassName("confirmation")[0];
  let second = document.getElementsByClassName("second")[0];
  
  second.style.display = "none";
  conformation.style.display = "block";
}






