import { fetchPhotos } from './js/pixabay-api';
import { addImagesToGallery } from './js/render-functions';

const searchForm = document.querySelector('.submit-form');
const searchInput = document.querySelector('.search-input');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

function clearGallery() {
  galleryEl.innerHTML = '';
}

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  loaderEl.classList.remove('hidden');

  fetchPhotos(query)
    .then(images => {
      if (images.length > 0) {
        addImagesToGallery(images);
      }
    })
    .finally(() => {
      loaderEl.classList.add('hidden');
    });
});
