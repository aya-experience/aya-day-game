document.querySelector("body").addEventListener("mouseout", () => {
  document.querySelector("h2.step-1").classList.add("end");
  document.querySelector("h2.step-2").classList.add("start");
  document.querySelector("h2.step-3").classList.add("start");
  document.querySelector("p").classList.add("start");
  document.querySelector("body").classList.add("start");
});
