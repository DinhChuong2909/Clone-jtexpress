const menuMobile = document.getElementById('menu-mobile');
const menuOnMobile = document.querySelector('.menu-mobile-body');
let isOpen = false;

const openMenu = () => { 
  isOpen = !isOpen;
  var overlay = document.getElementById('menu-overlay');
  if (isOpen == true) {
    menuMobile.classList.add('menu-mobile-body--active');
    overlay.style.display = "block";
  } else {
    menuMobile.classList.remove('menu-mobile-body--active');
    overlay.style.display = "none";
  }
}

const toggleBackground = (div) => {
  div.classList.toggle('menu-expended');
  var icon = div.querySelector('ion-icon');
  var hidden = div.querySelectorAll('#dropdown');
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
}

const changeIconDropdown = (div) => {
  var icon = div.querySelector('ion-icon');
  var iconName = icon.getAttribute("name");
  if (iconName === "chevron-forward-outline") {
    div.style.paddingBottom = "0.75em";
  } else {
    div.style.paddingBottom = "0";
  }
}

const openLanguageDropdown = () => {
  var dropdown = document.querySelector('#language-dropdown');
  var overlay = document.querySelector('#language-overlay');
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
    overlay.style.display = "block";
  } else {
    dropdown.style.display = "none";
    overlay.style.display = "none";
  }
}

const openLanguageDropdown_lg = () => {
  var dropdown = document.querySelector('#language-dropdown-lg');
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

const closeAds = () => {
  const ads = document.getElementById('ads');
  ads.style.display = "none";
  ads.style.zIndex = "-1";
}