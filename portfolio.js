//footer text
const webLangs = ['HTML', 'CSS', 'Javascript'];
let footerText = document.getElementById('footer-text')
let sentence = 'This page was built using: '
sentence += webLangs[0];
for (i=1, len=webLangs.length; i < (len - 1); i++) {
  sentence +=  ', ' + webLangs[i];
}
sentence += ' and ' + webLangs[webLangs.length - 1];
footerText.innerText = sentence;

// check for index page
if (document.getElementById('index-wrapper') != null) {

  // retrieve GitHub profile pic and name
  const GITHUB_URL = "https://api.github.com/users/JakeRSA";
  fetch(GITHUB_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const profileImage = document.getElementById("profile-image");
      profileImage.src = data.avatar_url;
      const loginName = document.getElementById('my-name');
      loginName.innerText = data.login;
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
  if (card != null) {
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
  }

  // card click behaviour
function shootingStar() {
  let star0 = document.querySelectorAll('.shooting-star')[0];
  let star = star0.cloneNode(true);
  document.body.appendChild(star);
  let height = window.innerHeight - 160;
  console.log(height);
  let width = window.innerWidth;
  let rndm = Math.random();
  let startX = 0
  console.log(rndm);
  if (rndm >= 0.5) {
    startX = width + 1;
    console.log(startX);
  } else {
    startX = -1;
    console.log(startX);
  }
  let startY = Math.floor(Math.random() * height) + 80;
  console.log(startX);
  console.log(startY);
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
}



// check for about page
if (document.getElementById('edu') != null) {

  const eduBtn = document.getElementById('edu') 
  const workBtn = document.getElementById('work')
  const funBtn = document.getElementById('fun')
  const basicPara = document.getElementById('about-basic')
  const eduPara = document.getElementById('about-edu')
  const workPara = document.getElementById('about-work')
  const funPara = document.getElementById('about-fun')

  // about buttons behaviour
  eduBtn.addEventListener('mouseover', function() {
    eduBtn.style.backgroundColor = '#00e096';
    basicPara.style.display = 'none';
    eduPara.style.display = 'inline';
  }) 
  eduBtn.addEventListener('mouseout', function() {
    eduBtn.style.backgroundColor = '#0f1711';
    eduPara.style.display = 'none';
    basicPara.style.display = 'inline';
  })
  workBtn.addEventListener('mouseover', function() {
    workBtn.style.backgroundColor = '#ff5500';
    basicPara.style.display = 'none';
    workPara.style.display = 'inline';
  }) 
  workBtn.addEventListener('mouseout', function() {
    workBtn.style.backgroundColor = '#0f1711';
    workPara.style.display = 'none';
    basicPara.style.display = 'inline';
  })
  funBtn.addEventListener('mouseover', function() {
    funBtn.style.backgroundColor = '#6ce000';
    basicPara.style.display = 'none';
    funPara.style.display = 'inline';
  }) 
  funBtn.addEventListener('mouseout', function() {
    funBtn.style.backgroundColor = '#0f1711';
    funPara.style.display = 'none';
    basicPara.style.display = 'inline';
  })

  // interactive map
  const joburg = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.75250923015!2d27.9699832919817!3d-26.17150455364017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sil!4v1596971356796!5m2!1sen!2sil"
  const ramatHasharon = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54056.84057130788!2d34.79686127470349!3d32.13538467943322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d484be5486675%3A0x8d59955a0441a110!2sRamat%20Hasharon!5e0!3m2!1sen!2sil!4v1598188623768!5m2!1sen!2sil"
  const telAviv = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.91309767583!2d34.72720493743215!3d32.08791223226436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1598188712974!5m2!1sen!2sil"
  const cityLinks = [joburg, ramatHasharon, telAviv]
  let currentLink = 0

  const prevButton = document.querySelector('#prev');
  const nextButton = document.querySelector('#next');
  const cityText = document.querySelector('#city-text');

  nextButton.addEventListener('click', function() {
    currentLink++;
    document.getElementsByTagName('iframe')[0].src = cityLinks[currentLink];
    prevButton.disabled = false;
    prevButton.style.backgroundColor = '#0f1711';
    if (currentLink + 1 === cityLinks.length) {
      nextButton.disabled = true;
      nextButton.style.backgroundColor = 'lightgray';
      cityText.innerText = 'Now I live here';
    } else {
      cityText.innerText = 'Then I moved here';
    }
  });
  prevButton.addEventListener('click', function() {
    currentLink--;
    document.querySelector('iframe').src = cityLinks[currentLink];
    nextButton.disabled = false;
    nextButton.style.backgroundColor = '#0f1711';
    if (currentLink === 0) {
      prevButton.disabled = true;
      prevButton.style.backgroundColor = 'lightgray';
      cityText.innerText = 'I was born and raised here';
    } else {
      cityText.innerText = 'Before that I was here';
    }
  });
};

// check for contact page
if (document.getElementById('phone') !=null) {

let requiredFields = document.querySelectorAll('[required=required]');
const phoneRow = document.getElementById('phone-row');
const emailRow = document.getElementById('email-row');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

  let preferred = document.forms['contact-form'].elements['preferred'];
  for (let i=0, len=preferred.length; i < len; i++) {
    preferred[i].onclick = function() {
      if (this.value === 'phone') {
        phoneRow.style.display = 'block';
        phone.setAttribute('required', 'required');
        email.removeAttribute('required');
        requiredFields = document.querySelectorAll('[required=required]');
        emailRow.style.display = 'none';
      } else {
        emailRow.style.display = 'block';
        email.setAttribute('required', 'required');
        phone.removeAttribute('required');
        requiredFields = document.querySelectorAll('[required=required]');
        phoneRow.style.display = 'none';      
      }
    }
  };

  let submitBtn = document.getElementById('submit');

  function checkNoEmpties(requiredFields) {
    let emptyRequireds = 0
    for (i=0; i < requiredFields.length; i ++) {
      if (requiredFields[i].value == '') {
        emptyRequireds ++;
      }
    }
    if (emptyRequireds === 0) {
      submitBtn.removeAttribute('disabled');
    } else {
      submitBtn.setAttribute('disabled', 'disabled');      
    }  
  }

  requiredFields.forEach(elem => {
    elem.addEventListener('focusout', function() {
      checkNoEmpties(requiredFields);
    });
    elem.addEventListener('keyup', function() {
      checkNoEmpties(requiredFields);
    });
  })
  preferred.forEach(elem => {
    elem.addEventListener('click', function() {
      checkNoEmpties(requiredFields);
    });
  })

  // output form data to console
  allFields = document.forms['contact-form'].elements
  document.querySelector('#submit').addEventListener('click', function() {
    for (let i=0; i < allFields.length; i++) {
      if (allFields[i].name === 'first-name') {
        console.log('First Name: ' + allFields[i].value);
      } else if (allFields[i].name === 'last-name') {
        console.log('Last Name: ' + allFields[i].value);
      } else if (allFields[i].name === 'email') {
        console.log('Email: ' + allFields[i].value);
      } else if (allFields[i].name === 'phone') {
        console.log('Phone: ' + allFields[i].value);
      } else if (allFields[i].name === 'preferred' && allFields[i].checked === true) {
        console.log('Contact Via: ' + allFields[i].value);
      } else if (allFields[i].name === 'comment') {
        console.log('Comment: ' + allFields[i].value);
      }
    }
    return false;
  })
}