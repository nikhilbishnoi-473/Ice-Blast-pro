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