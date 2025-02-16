// Получаем элементы
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Добавляем обработчик события для иконки "гамбургер"
hamburger.addEventListener('click', () => {
    // Переключаем класс "active" для меню
    navMenu.classList.toggle('active');
});

// Пагинация
const posts = document.querySelectorAll('.post');
const pageButtons = document.querySelectorAll('.page-button');

// Функция для отображения постов на выбранной странице
function showPage(page) {
    posts.forEach(post => {
        if (post.dataset.page === page) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });

    // Обновляем активную кнопку
    pageButtons.forEach(button => {
        if (button.dataset.page === page) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Обработчики событий для кнопок пагинации
pageButtons.forEach(button => {
    button.addEventListener('click', () => {
        const page = button.dataset.page;
        showPage(page);
    });
});

// Показываем первую страницу по умолчанию
showPage('1');