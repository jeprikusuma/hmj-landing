const container = document.querySelector(".container"),
  more = container.querySelector(".link a.more"),
  back = container.querySelector(".more-content .back a"),
  loader = document.querySelector(".loader"),
  background = document.querySelector(".background img");

// full size animation
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

//loader
// add class "active" on class "loader" first
const logo = container.querySelector("header .logo"),
  logoImg = container.querySelector("header .logo img"),
  text = container.querySelector("header .text"),
  link = container.querySelector("main .link");
function loaderFun() {
  loader.classList.remove("active");
  logo.style.animationPlayState = "running";
  logoImg.style.animationPlayState = "running";
  text.style.animationPlayState = "running";
  link.style.animationPlayState = "running";
}

//mobile animation
let first = true;
setInterval(() => {
  if (screen.width <= 550) {
    let beforePos = container.scrollTop;
    container.querySelector(".more-content").style.transition = "500ms";
    while (first) {
      container.querySelector(".more-content").style.borderTopLeftRadius =
        "3rem";
      container.querySelector(".more-content").style.borderTopRightRadius =
        "3rem";
      background.src = "assets/img/background-mobile.png";
      first = false;
    }

    container.onscroll = () => {
      if (beforePos < container.scrollTop) {
        container.querySelector(".more-content").style.borderTopLeftRadius =
          "0rem";
        container.querySelector(".more-content").style.borderTopRightRadius =
          "0rem";
      } else {
        container.querySelector(".more-content").style.borderTopLeftRadius =
          "3rem";
        container.querySelector(".more-content").style.borderTopRightRadius =
          "3rem";
      }
      beforePos = container.scrollTop;
    };
  } else {
    container.querySelector(".more-content").style.borderRadius = "0";
    background.src = "assets/img/background.png";
    first = true;
  }
}, 100);

//background
let firstBg = true;
setInterval(() => {
  if (screen.width <= 411) {
    while (firstBg) {
      background.src = "assets/img/background-mobile.png";
      firstBg = false;
    }
  } else {
    background.src = "assets/img/background.png";
    firstBg = true;
  }
}, 100);
