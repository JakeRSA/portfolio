const eduBtn = document.getElementById("edu");
const workBtn = document.getElementById("work");
const funBtn = document.getElementById("fun");
const basicPara = document.getElementById("about-basic");
const eduPara = document.getElementById("about-edu");
const workPara = document.getElementById("about-work");
const funPara = document.getElementById("about-fun");

// about buttons behaviour
eduBtn.addEventListener("mouseover", function () {
  eduBtn.style.backgroundColor = "#00e096";
  basicPara.style.display = "none";
  eduPara.style.display = "inline";
});
eduBtn.addEventListener("mouseout", function () {
  eduBtn.style.backgroundColor = "#0f1711";
  eduPara.style.display = "none";
  basicPara.style.display = "inline";
});
workBtn.addEventListener("mouseover", function () {
  workBtn.style.backgroundColor = "#ff5500";
  basicPara.style.display = "none";
  workPara.style.display = "inline";
});
workBtn.addEventListener("mouseout", function () {
  workBtn.style.backgroundColor = "#0f1711";
  workPara.style.display = "none";
  basicPara.style.display = "inline";
});
funBtn.addEventListener("mouseover", function () {
  funBtn.style.backgroundColor = "#6ce000";
  basicPara.style.display = "none";
  funPara.style.display = "inline";
});
funBtn.addEventListener("mouseout", function () {
  funBtn.style.backgroundColor = "#0f1711";
  funPara.style.display = "none";
  basicPara.style.display = "inline";
});

// interactive map
const joburg =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.75250923015!2d27.9699832919817!3d-26.17150455364017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sil!4v1596971356796!5m2!1sen!2sil";
const ramatHasharon =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54056.84057130788!2d34.79686127470349!3d32.13538467943322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d484be5486675%3A0x8d59955a0441a110!2sRamat%20Hasharon!5e0!3m2!1sen!2sil!4v1598188623768!5m2!1sen!2sil";
const telAviv =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.91309767583!2d34.72720493743215!3d32.08791223226436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1598188712974!5m2!1sen!2sil";
const cityLinks = [joburg, ramatHasharon, telAviv];
let currentLink = 0;

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const cityText = document.querySelector("#city-text");

nextButton.addEventListener("click", function () {
  currentLink++;
  document.getElementsByTagName("iframe")[0].src = cityLinks[currentLink];
  prevButton.disabled = false;
  prevButton.style.backgroundColor = "#0f1711";
  if (currentLink + 1 === cityLinks.length) {
    nextButton.disabled = true;
    nextButton.style.backgroundColor = "lightgray";
    cityText.innerText = "Now I live here";
  } else {
    cityText.innerText = "Then I moved here";
  }
});
prevButton.addEventListener("click", function () {
  currentLink--;
  document.querySelector("iframe").src = cityLinks[currentLink];
  nextButton.disabled = false;
  nextButton.style.backgroundColor = "#0f1711";
  if (currentLink === 0) {
    prevButton.disabled = true;
    prevButton.style.backgroundColor = "lightgray";
    cityText.innerText = "I was born and raised here";
  } else {
    cityText.innerText = "Before that I was here";
  }
});
