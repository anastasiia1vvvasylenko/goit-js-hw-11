import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '45506482-0746cd613ccb32219c9653431';

export function fetchPhotos(query) {
  if (!query.trim()) {
    iziToast.error({
      message: 'Please enter a searcg query!',
      position: 'topRight',
    });
    return Promise.resolve([]);
  }

  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  document.querySelector('.loader').classList.remove('hidden');
}
