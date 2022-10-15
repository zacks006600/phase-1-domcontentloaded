// Your code goes here
document.addEventListener("DOMContentLoaded", () =>
  console.log("The DOM has Loaded")
);

document.addEventListener("DOMContentLoaded", function () {
  let p = document.querySelector("p");
  p.textContent = "This is really cool!";
});