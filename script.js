// LIGHTBOX IMMAGINI
const imageLightbox = document.getElementById('image-lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const imageThumbnails = document.querySelectorAll('.image-thumbnail');
const closeImageBtn = document.querySelector('#image-lightbox .close');

imageThumbnails.forEach(img => {
  img.addEventListener('click', () => {
    imageLightbox.style.display = 'flex';
    lightboxImg.src = img.dataset.full;
  });
});

closeImageBtn.addEventListener('click', () => {
  imageLightbox.style.display = 'none';
});

// LIGHTBOX VIDEO
const videoLightbox = document.getElementById('video-lightbox');
const videoFrame = document.querySelector('.lightbox-video');
const videoTriggers = document.querySelectorAll('.video-thumbnail');
const closeVideoBtn = document.querySelector('#video-lightbox .close');

videoTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    videoLightbox.style.display = 'flex';
    videoFrame.src = trigger.dataset.video;
    videoFrame.play();
  });
});

closeVideoBtn.addEventListener('click', () => {
  videoLightbox.style.display = 'none';
  videoFrame.pause();
  videoFrame.src = "";
});
