// LIGHTBOX IMMAGINI
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.lightbox .close');
const triggers = document.querySelectorAll('.lightbox-trigger');

triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImage.src = trigger.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
