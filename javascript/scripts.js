// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  let captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    let navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    let x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}



function resetNames(){
  $('#name1').removeClass('btn-primary');
  $('#name1').removeClass('btn-success');
  $('#name1').removeClass('btn-secondary');
  $('#name2').removeClass('btn-primary');
  $('#name2').removeClass('btn-success');
  $('#name2').removeClass('btn-secondary');
}

function twitterFun(){
  window.twttr = (function(d, s, id) {
  let js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
  }(document, "script", "twitter-wjs"));
  twttr.widgets.load();
}

function showName(name){
  let other = '';
  $('.info').css("display", "block");
  resetNames();
  if (name === "name1"){
    placeText(1);
  } else {
    placeText(2);
  }
  twitterFun();
  $('#centeringName').removeClass("centerNames");
  $('#nftGalInfo').css("display", "none");
}

function placeText(t) {
  let sentence1 = document.getElementById("sentence1");
  let paragraph1 = document.getElementById("paragraph1");
  let username = document.getElementById("username");
  let userimg = document.getElementById("userimg");
  let item1 = document.getElementById("item1");
  let item2 = document.getElementById("item2");
  let item3 = document.getElementById("item3");
  let item4 = document.getElementById("item4");
  let item5 = document.getElementById("item5");
  let item6 = document.getElementById("item6");
  let item7 = document.getElementById("item7");
  let item8 = document.getElementById("item8");
  let item9 = document.getElementById("item9");
  let pubBanner = document.getElementById("pubBanner");
  let publication = document.getElementById("publication");
  let school1 = document.getElementById("school1");
  let paragraph2 = document.getElementById("paragraph2");
  let paragraph3 = document.getElementById("paragraph3");
  let socialsMRS = document.getElementById("socialsMRS");
  let socialsMR = document.getElementById("socialsMR");

  $('.info').css("display", "block");

  if (t==1){
    $('#name1').addClass('btn btn-success');
    $('#name2').addClass('btn btn-secondary');
    sentence1.innerHTML = "I love knowledge and education and I strongly believe that humanity can achieve great things";
    paragraph1.innerHTML = "I am currently pursuing my Ph.D. in Biomolecular Sciences at the University of Lethbridge, Alberta, Canada. \
    I have an M.D. degree, which I completed at Ivano-Frankivsk National Medical University, Ukraine 🇺🇦 \
    My hobbies range from astrophysics and psychology to watching horror movies.";
    username.innerHTML = "Viktoriia Cherkasova";
    userimg.src = "images/viktoriia_pfp.png";
    item1.innerHTML = "Cancer Biology, ";
    item2.innerHTML = "Immunotherapy, ";
    item3.innerHTML = "Personalized Medicine, ";
    item4.innerHTML = "Women in STEM, ";
    item5.innerHTML = "Decentralized Financial Systems (DeFi), ";
    item6.innerHTML = "Cryptocurrency, ";
    item7.innerHTML = "NFTs";
    item8.style.display = "none";
    item9.style.display = "none";
    pubBanner.style.display = "block";
    publication.style.display = "block";
    school1.src = "images/ivanov-frankivsklogo.png";
    school1.alt = "Ivano Frankivsk Medical School";
    paragraph2.innerHTML = "Obtained Medical Degree 2008";
    paragraph3.innerHTML = "Currently working on Ph.D in Biology";
    socialsMRS.style.display = "block";
    socialsMR.style.display = "none";
  } else {
    $('#name2').addClass('btn btn-success');
    $('#name1').addClass('btn btn-secondary');
    sentence1.innerHTML = "I love learning new things, anything really.";
    paragraph1.innerHTML = "I recently finished my Masters of Sciences, in Neuroscience at the University of Lethbridge, Alberta, Canada. \
    I have a Bachelor of Science in Computer Science, from the University of Lethbridge. \
    My hobbies includes puzzles, reading, and watching movies.";
    username.innerHTML = "S. J. B.";
    userimg.src = "images/sjb_pfp.png";
    item1.innerHTML = "Programming, ";
    item2.innerHTML = "Database Management, ";
    item3.innerHTML = "Artificial Intelligence, ";
    item4.innerHTML = "Neuroscience, ";
    item5.innerHTML = "Full-stack Development, ";
    item6.innerHTML = "Robotics, ";
    item7.innerHTML = "Cryptocurrency, ";
    item8.innerHTML = "NFTs, ";
    item9.innerHTML = "And Much More... ";
    item8.style.display = "";
    item9.style.display = "";
    pubBanner.style.display = "none";
    publication.style.display = "none";
    school1.src = "images/lethbridgeCollege.png";
    school1.alt = "Lethbridge College";
    paragraph2.innerHTML = "Diploma Computer Information and Technology, 2016";
    paragraph3.innerHTML = "Bachelor of Science; Computer Science, 2019\ <br>Master of Science; Neuroscience 2022";
    socialsMRS.style.display = "none";
    socialsMR.style.display = "block";
  }
}

let topButton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
