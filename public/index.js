document.querySelector("body").addEventListener("mouseout", () => {
  document.querySelector("body").classList.add("start");
});

function aroundTheLake() {
  document.querySelector("img").classList.add("show");
  return "Look!";
}
