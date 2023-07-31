

function checkScrollPosition() {
  const backToTopBtn = document.querySelector(".backtotop");
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition >= 300) {
      backToTopBtn.classList.add('backtotop-show');
  } else {
      backToTopBtn.classList.remove('backtotop-show');
  }
}

function adjustButtonPosition() {
    const stickyButton = document.querySelector(".backtotop");
    const footer = document.querySelector('footer');
  const footerTop = footer.getBoundingClientRect().top;
  // const buttonBottom = stickyButton.getBoundingClientRect().bottom;

    // Calculate the distance between the button and the footer
    const distanceToFooter = footerTop - window.innerHeight;

    // If the button is overlapping the footer, make it relative to the footer
  if (distanceToFooter < 0) {
      if (!stickyButton.classList.contains('sticky-to-footer')) {
            stickyButton.classList.add('sticky-to-footer');
        }
    } else {
        if (stickyButton.classList.contains('sticky-to-footer')) {
            stickyButton.classList.remove('sticky-to-footer');
        }
  }
  
}


// Function to smoothly scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Attach the checkScrollPosition function to the scroll event
window.addEventListener('scroll', checkScrollPosition);

// Attach the scrollToTop function to the click event of the button
document.querySelector(".backtotop").addEventListener('click', scrollToTop);

// Attach the adjustButtonPosition function to the scroll event
window.addEventListener('scroll', adjustButtonPosition);
