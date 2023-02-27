import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = new SimpleLightbox('.gallery a');

const images = galleryItems.map(item => item.original).join('');

gallery.load(images, galleryItems.map(item => item.description));

gallery.on('show.simplelightbox', function () {
  console.log('Galeria pokazana');
}).on('shown.simplelightbox', function () {
  console.log('Galeria została pokazana');
}).on('close.simplelightbox', function () {
  console.log('Galeria zamknięta');
}).on('closed.simplelightbox', function () {
  console.log('Galeria została zamknięta');
});