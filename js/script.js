/* Задания на урок 1 :

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок 2:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1.1
const promoAdv = document.querySelector(".promo__adv");
const promoAdvImg = promoAdv.querySelectorAll("img");

promoAdvImg.forEach((item) => {
    item.remove()
})

// 1.2
const promoContent = document.querySelector(".promo__content");
const promoContentGenre = promoContent.querySelector(".promo__genre");

promoContentGenre.textContent = "драма";

// 1.3
const promoContentBg = promoContent.querySelector(".promo__bg");
promoContentBg.style.backgroundImage = "url('./img/bg.jpg')";

// 1.4 + 1.5
const promoInteractive = document.querySelector(".promo__interactive");
const promoInteractiveList = promoInteractive.querySelectorAll(".promo__interactive-list");

promoInteractiveList.forEach((item) => {
    item.remove()
})

const promoInteractiveTitle = document.querySelector(".promo__interactive-title");
const promoInteractiveNewList = document.createElement("ul");
promoInteractiveNewList.classList.add("promo__interactive-list")
promoInteractiveTitle.after(promoInteractiveNewList)


// for(let i = 0; i < movieDB.movies.length; i++) {
//     const promoInteractiveItem = document.createElement("li");
//     promoInteractiveItem.classList.add("promo__interactive-item");
//     promoInteractiveNewList.append(promoInteractiveItem);
//     promoInteractiveItem.innerHTML = `№${i+1} - ${movieDB.movies[i]} <div class="delete"></div>`
// }


function render() {
    movieDB.movies.sort();

    movieDB.movies.forEach((film, i) => {
        promoInteractiveNewList.innerHTML += `<li class="promo__interactive-item"> №${i+1} - ${film}
            <div class="delete"></div>
        </li>`
    })
}

render()







