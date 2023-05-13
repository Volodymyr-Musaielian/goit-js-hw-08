// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createImageMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createImageMarkup(images) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join('');
}

const gallery = new SimpleLightbox('.gallery__link', {
  sourceAttr: 'href',
  captionsData: 'alt',
  captionDelay: 250,
});
