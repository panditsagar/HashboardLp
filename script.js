document.addEventListener('DOMContentLoaded', () => {
  const vslPlayer = document.getElementById('vslPlayer');
  const playBtn = document.getElementById('playBtn');
  const videoOverlay = document.getElementById('videoOverlay');
  const closeVideo = document.getElementById('closeVideo');
  const vslIframe = document.getElementById('vslIframe');

  // Video YouTube URL with autoplay
  const autoplayUrl = "https://www.youtube-nocookie.com/embed/LZKVeYRT7Dk?autoplay=1&enablejsapi=1";
  const defaultUrl = "https://www.youtube-nocookie.com/embed/LZKVeYRT7Dk?enablejsapi=1";

  function openVideo() {
    videoOverlay.classList.add('active');
    vslIframe.src = autoplayUrl;
  }

  function stopVideo() {
    videoOverlay.classList.remove('active');
    vslIframe.src = defaultUrl;
  }

  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openVideo();
    });
  }

  if (vslPlayer) {
    vslPlayer.addEventListener('click', () => {
      if (!videoOverlay.classList.contains('active')) {
        openVideo();
      }
    });
  }

  if (closeVideo) {
    closeVideo.addEventListener('click', (e) => {
      e.stopPropagation();
      stopVideo();
    });
  }

  // Escape key closes video
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoOverlay.classList.contains('active')) {
      stopVideo();
    }
  });

  // Smooth scroll for CTA button
  const ctaBtn = document.querySelector('.btn-primary');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', (e) => {
      // Small visual click animation
      ctaBtn.style.transform = 'scale(0.96)';
      setTimeout(() => {
        ctaBtn.style.transform = '';
      }, 150);
    });
  }
});
