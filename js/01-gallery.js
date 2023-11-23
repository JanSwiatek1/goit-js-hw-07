import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector("ul.gallery");


const markup = galleryItems.map((image) => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`).join("");
gallery.insertAdjacentHTML('beforeend', markup);

gallery.onclick = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  function onEscape(event) {
    if (event.code !== "Escape") return;
    instance.close();
  }

  const instance = basicLightbox.create(
    `<img width="1200" src= ${event.target.dataset.source}>`,
    {
      onShow: () => window.addEventListener("keydown", onEscape),
      onClose: () => window.removeEventListener("keydown", onEscape),
    }
  );
  instance.show();
};
console.log(galleryItems);