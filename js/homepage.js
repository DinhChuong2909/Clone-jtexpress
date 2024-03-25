const menuMobile = document.getElementById("menu-mobile");
const menuOnMobile = document.querySelector(".menu-mobile-body");
let isOpen = false;

const openMenu = () => {
  isOpen = !isOpen;
  var overlay = document.getElementById("menu-overlay");
  if (isOpen == true) {
    menuMobile.classList.add("menu-mobile-body--active");
    overlay.style.display = "block";
  } else {
    menuMobile.classList.remove("menu-mobile-body--active");
    overlay.style.display = "none";
  }
};

const toggleBackground = (div) => {
  div.classList.toggle("menu-expended");
  var icon = div.querySelector("ion-icon");
  var hidden = div.querySelectorAll("#dropdown");
  var iconName = icon.getAttribute("name");
  if (iconName === "chevron-forward-outline") {
    icon.setAttribute("name", "chevron-down-outline");
    hidden.forEach((item) => {
      item.style.display = "block";
    });
  } else {
    icon.setAttribute("name", "chevron-forward-outline");
    hidden.forEach((item) => {
      item.style.display = "none";
    });
  }
};

const changeIconDropdown = (div) => {
  var icon = div.querySelector("ion-icon");
  var iconName = icon.getAttribute("name");
  if (iconName === "chevron-forward-outline") {
    div.style.paddingBottom = "0.75em";
  } else {
    div.style.paddingBottom = "0";
  }
};

const openLanguageDropdown = () => {
  var dropdown = document.querySelector("#language-dropdown");
  var overlay = document.querySelector("#language-overlay");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
    overlay.style.display = "block";
  } else {
    dropdown.style.display = "none";
    overlay.style.display = "none";
  }
};

const openLanguageDropdown_lg = () => {
  var dropdown = document.querySelector("#language-dropdown-lg");
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
};

const closeAds = () => {
  const ads = document.getElementById("ads");
  ads.style.display = "none";
  ads.style.zIndex = "-1";
};

const changeTab = (index) => {
  var tab = document.querySelectorAll(".tab");
  var tabIndex = document.querySelectorAll(".tab-index");
  if (index === 0) {
    tab[0].classList.add("currentIndex");
    tab[1].classList.remove("currentIndex");
    tabIndex[0].classList.add("tab-active");
    tabIndex[1].classList.remove("tab-active");
  } else {
    tab[0].classList.remove("currentIndex");
    tab[1].classList.add("currentIndex");
    tabIndex[0].classList.remove("tab-active");
    tabIndex[1].classList.add("tab-active");
  }
};

function handleMouseOver(e) {
  let currentImgHover = e.getAttribute("data-active");
  e.setAttribute("src", currentImgHover);
}
function handleMouseOut(e) {
  let currentImgDefault = e.getAttribute("data-default");
  e.setAttribute("src", currentImgDefault);
}

const changeBlog = (index) => {
  const blog = document.querySelectorAll(".blog");
  const hotNews = document.getElementById("hot-news");
  const magazine = document.getElementById("j-magazine");
  if (index === 0) {
    blog[0].classList.add("blog_title-active");
    blog[1].classList.remove("blog_title-active");
    hotNews.style.display = "grid";
    magazine.style.display = "none";
  } else {
    blog[0].classList.remove("blog_title-active");
    blog[1].classList.add("blog_title-active");
    hotNews.style.display = "none";
    magazine.style.display = "grid";
  }
};

const showDetails = (img) => {
  const getName = img.getAttribute("data-name-type");
  const getImg = img.getAttribute("data-image-type");
  const getContent = img.getAttribute("data-content-type");
  const getPosition = img.getAttribute("data-position-type");
  const name = document.getElementById("data_name");
  const image = document.getElementById("data_image");
  const content = document.getElementById("data_content");
  const position = document.getElementById("data_position");
  name.innerHTML = getName;
  image.src = getImg;
  content.innerHTML = getContent;
  position.innerHTML = getPosition;
};