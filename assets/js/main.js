function openNav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu").classList.toggle("cross")
}
function openNav_1() {
  document.getElementById("navbar_1").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu_1").classList.toggle("cross_1")
}



$('.responsive_2').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToScroll: 1,
  variableWidth: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  pauseOnHover: true,
  cssEase: 'linear',
});
 
function displaytoggle(){
  var click = document.getElementById("check_1");
  if (click.style.display === "none"){
    click.style.display = "block";
  }
  else {
    click.style.display = "none"
  }
}


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}