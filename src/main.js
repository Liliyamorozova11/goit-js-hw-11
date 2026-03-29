import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

hideLoader(loader);

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) {
    iziToast.show({
      message: 'Please fill in the search field!',
      position: 'topRight',
      color: 'red',
    });
    return;
  }

  clearGallery(gallery);
  showLoader(loader);

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: 'red',
      });
      return;
    }

    gallery.innerHTML = createGallery(data.hits);
    lightbox.refresh();
  } catch (error) {
    iziToast.show({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      color: 'red',
    });
  } finally {
    hideLoader(loader);
    form.reset();
  }
});