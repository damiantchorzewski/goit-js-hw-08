import SimpleLightbox from "../../node_modules/simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "../../node_modules/simplelightbox/dist/simple-lightbox.min.css";



const images = galleryItems.map(item => `
  <a href="${item.original}">
    <img src="${item.preview}" alt="${item.description}" />
  </a>
`).join("");

const gallery = new SimpleLightbox(images, {
  captionsData: "alt",
  captionDelay: 250,
});

gallery.on('show.simplelightbox', function () {
  console.log('Galeria pokazana');
}).on('shown.simplelightbox', function () {
  console.log('Galeria została pokazana');
}).on('close.simplelightbox', function () {
  console.log('Galeria zamknięta');
}).on('closed.simplelightbox', function () {
  console.log('Galeria została zamknięta');
});