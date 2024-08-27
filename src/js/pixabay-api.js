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

  return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      return data.hits;
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        message:
          'An error occurred while fetching images. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      document.querySelector('.loader').classList.add('hidden');
    });
}
