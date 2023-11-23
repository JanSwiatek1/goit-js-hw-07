import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector("ul.gallery");

const markup = galleryItems.map((image) => 
`<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
).join("");
gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    fadeSpeed: 500,
    scrollZoom: true,
    maxZoom: 2,
    captionDelay: 250,
});




console.log(galleryItems);
