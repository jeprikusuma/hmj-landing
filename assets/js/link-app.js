const container = document.querySelector(".container"),
  more = container.querySelector(".link a.more"),
  back = container.querySelector(".more-content .back a"),
  loader = document.querySelector(".loader");

more.addEventListener("click", () => {
  container.classList.add("show-more");
  container.querySelector(".more-content").style.animation =
    "1s both sideContentItems";
  container.querySelector(".main-content").style.animation =
    "1s both sideContent";
  container.querySelector("main .link").style.animationDelay = "1s";
});
back.addEventListener("click", () => {
  container.classList.remove("show-more");
  container.querySelector(".more-content").style.animation =
    "1s both sideContentItemsBack";
  container.querySelector(".main-content").style.animation = "1s both sideBack";
});

// add class "active" on class "loader" first

const logo = container.querySelector("header .logo"),
  logoImg = container.querySelector("header .logo img"),
  text = container.querySelector("header .text");
function loaderFun() {
  loader.classList.remove("active");
  logo.style.animationPlayState = "running";
  logoImg.style.animationPlayState = "running";
  text.style.animationPlayState = "running";
}
