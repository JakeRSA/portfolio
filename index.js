
let footerText = document.getElementById('footer-text')
// retrieve GitHub profile pic
const GITHUB_URL = "https://api.github.com/users/JakeRSA";
fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });

// card hover behaviour
function cardZoom(card, focus) {
  let cardWidth = card.offsetWidth;
  let cardHeight = card.offsetHeight;
  let id = setInterval(frame, 1);
  function frame() {
    if (cardWidth >= 330 && focus == 'in') {
      clearInterval(id);
    } else if (cardWidth <= 314 && focus == 'out') {
      clearInterval(id);
    } else if (focus == 'in') {
      cardWidth++;
      cardHeight++;
      card.style.width = cardWidth + 'px';
      card.style.height = cardHeight + 'px';
    } else if (focus == 'out') {
      cardWidth--;
      cardHeight--;
      card.style.width = cardWidth + 'px';
      card.style.height = cardHeight + 'px';
    }
  } 
}
let profileImage = document.getElementById("profile-image");
function cardColor(card, focus) {
  let socials = document.querySelectorAll('.socials-button');
  let id = setInterval(frame, 1);
  if (focus == 'in') {
    grayScale = 100;
    invert = 0;
    profileImage.style.filter == 'grayscale(0%)';
  } else {
    grayScale = 0;
    invert = 0.4;
    profileImage.style.filter == 'grayscale(100%)';
  }
  function frame() {
    if (profileImage.style.filter == 'grayscale(0%)' && focus =='in') {
      clearInterval(id);
    } else if (profileImage.style.filter == 'grayscale(100%)' && focus =='out'){ 
      clearInterval(id);
    } else if (focus == 'in') {
      grayScale-=5;
      profileImage.style.filter = 'grayscale(' + grayScale + '%)';
    } else if (focus == 'out') {
      grayScale+=5;
      profileImage.style.filter = 'grayscale(' + grayScale + '%)';      
    }
  }
}
function bgColor(focus) {
  let body = document.querySelector('body');
  let id = setInterval(frame, 1);
  if (focus == 'in') {
    val = 255;
  } else {
    val = 15;
  }
  body.style.backgroundColor = 'rgb(' + val + ', ' + val + ', ' + val + ')';
  function frame() {
    let currentRGB = window.getComputedStyle(body).getPropertyValue('background-color');
    if (currentRGB == 'rgb(15, 15, 15)' && focus =='in') {
      clearInterval(id);
    } else if (currentRGB == 'rgb(255, 255, 255)' && focus =='out') {
      clearInterval(id);
    } else if (focus == 'in') {
      val-=20;
      body.style.backgroundColor = 'rgb(' + val + ', ' + val + ', ' + val + ')';
    } else if (focus == 'out') {
      val+=20;
      body.style.backgroundColor = 'rgb(' + val + ', ' + val + ', ' + val + ')';      
    }
  }
}
const card = document.getElementsByClassName('card')[0];
  card.addEventListener('mouseenter', function() {
    card.style.boxShadow = '4px 4px 80px 0px rgba(30, 30, 255, 1)';
    card.style.marginBottom = '10px';
    footerText.style.display = 'none';
    cardZoom(card, 'in');
    cardColor(card, 'in');
    bgColor('in');
  });
  card.addEventListener('mouseleave', function() {
    card.style.boxShadow = '4px 4px 40px 0px rgba(0, 0, 0, 1)';
    card.style.marginBottom = '30px';
    footerText.style.display = 'initial';
    cardZoom(card, 'out');
    cardColor(card, 'out');
    bgColor('out');
  })

// card click behaviour
function shootingStar() {
let star0 = document.querySelectorAll('.shooting-star')[0];
let star = star0.cloneNode(true);
document.body.appendChild(star);
let height = window.innerHeight - 160;
let width = window.innerWidth;
let rndm = Math.random();
let startX = 0
if (rndm >= 0.5) {
  startX = width + 1;
} else {
  startX = -1;
}
let startY = Math.floor(Math.random() * height) + 80;
let posX = startX;
let posY = startY;
star.style.top = posY + 'px';
let id = setInterval(frame, 1);
function frame() {
  if (startX == -1) {
    if (posX < width) {
      posX+=2;
      star.style.left = posX + 'px';
    } else {
      clearInterval(id);
      star.remove();
    }
  } else if (startX > -1) {
      posX-=2;
      star.style.left = posX + 'px';
    } else {
      clearInterval(id);
      star.remove();
    }
  }
}
card.addEventListener('click', function() {
  shootingStar();
})