function filterGallery(category) {
  const items = document.querySelectorAll('.gallery_items');
  items.forEach(item => {
    item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
  });
}

function openFullScreen(imageElement) {
  const imgSrc = imageElement.src;
  const fullScreen = document.getElementById('fullScreen');
  const fullScreenImg = document.getElementById('fullScreen_img');

  if (imgSrc && fullScreen && fullScreenImg) {
    fullScreenImg.src = imgSrc;
    fullScreen.style.display = 'flex';
  }
}

function closeFullScreen() {
  const fullScreen = document.getElementById('fullScreen');
  if (fullScreen) {
    fullScreen.style.display = 'none';
  }
}