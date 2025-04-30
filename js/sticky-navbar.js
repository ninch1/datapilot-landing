document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('main-nav');
  const heroSection = document.querySelector('section');
  const placeholder = document.getElementById('navbar-placeholder');

  // setting initial animation state
  navbar.classList.add('opacity-0', '-translate-y-4');

  window.addEventListener('scroll', () => {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

    if (window.scrollY >= heroBottom - navbar.offsetHeight) {
      // making navbar sticky and visible
      navbar.classList.add(
        'fixed', 'top-0', 'z-50', 'w-full', 'shadow-md',
        'backdrop-blur-md', 'bg-whitebg/80',
        'opacity-100', 'translate-y-0'
      );
      navbar.classList.remove('opacity-0', '-translate-y-4');

      // im adding placeholder height to prevent shifting
      placeholder.style.height = `${navbar.offsetHeight}px`;
    } else {
      // revert to non-sticky and hide
      navbar.classList.remove(
        'fixed', 'top-0', 'z-50', 'w-full', 'shadow-md',
        'backdrop-blur-md', 'bg-whitebg/80',
        'opacity-100', 'translate-y-0'
      );
      navbar.classList.add('opacity-0', '-translate-y-4');

      // removing placeholder height
      placeholder.style.height = '0px';

      if (menuOpen) {
        mobileMenu.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
        mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
        menuOpen = !menuOpen;
      }
    }
  });
});

//menu toggle

const hamburger = document.getElementById('hamburger');
const hamburger1 = document.getElementById('hamburger1');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

function toggleMobileMenu() {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileMenu.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
    mobileMenu.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
  } else {
    mobileMenu.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
    mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
  }
}

if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);
if (hamburger1) hamburger1.addEventListener('click', toggleMobileMenu);
