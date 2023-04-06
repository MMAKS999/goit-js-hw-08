// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryEr = document.querySelector('.gallery');
// Прибираємо точки на елементі li
galleryEr.style.listStyle = 'none';
// Функція генерування розмітки масиву зображень
// зупинка стандартної поведінки браузера onclick="event.preventDefault()"
// onst link = document.querySelector('a'); // отримуємо посилання з документу
// link.addEventListener('click', function(event) {
//   event.preventDefault(); // зупиняємо стандартну поведінку браузера
// });
function createLi(array) {
  return array.reduce((acc, item) => `${acc} 
            <li class="gallery__item">
    <a class="gallery__link" href="${item.original}" onclick="event.preventDefault()"> 
        <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
        />
    </a>
    </li> `, '');
}
const LiErray = createLi(galleryItems);
// додавання в дом дерева
galleryEr.insertAdjacentHTML('beforeend', LiErray);

//  Додавання галереї
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
