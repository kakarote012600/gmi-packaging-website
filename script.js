const navbar = document.getElementById('navbar');
const menuButton = document.getElementById('menuButton');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

menuButton.addEventListener('click', () => {
  const open = navbar.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const onScroll = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 15);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const heroArt = document.querySelector('.hero-art');
window.addEventListener('mousemove', (event) => {
  if (!heroArt || window.innerWidth < 980) return;
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;
  heroArt.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
}, { passive: true });
