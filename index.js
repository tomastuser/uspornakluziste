function up() {
  window.scrollTo(0, 0);
}

const footerButton = document.querySelector('.footerButton');
const scrollCheck = () => {
  if (window.pageYOffset > 300) {
    console.log(window.pageYOffset);
    footerButton.style.opacity = '100';
    footerButton.style.pointerEvents = 'auto';
  } else {
    footerButton.style.opacity = '0';
    footerButton.style.pointerEvents = 'none';
  }
};

document.addEventListener('scroll', scrollCheck);
