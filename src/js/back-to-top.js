
const goTopBtn = document.querySelector(".backtotop");

window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.scrollY;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("backtotop--show");
  } else {
    goTopBtn.classList.remove("backtotop--show");
  }
}


window.onscroll = () => {
    toggleTopButton();
  }
  function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
function goTop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -75); 
    setTimeout(goTop, 0); 
  }
}

window.onscroll = () => {
    toggleTopButton();
  }
  function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
      document.getElementById('backtotop').classList.remove('d-none');
    } else {
      document.getElementById('backtotop').classList.add('d-none');
    }
  }