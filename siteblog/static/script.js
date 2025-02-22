// Получаем элементы
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu ul li a');

// Добавляем обработчик события для иконки "гамбургер"
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

/ Пагинация
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

// Выделение активного пункта меню
function setActiveMenuItem() {
    const currentPath = window.location.pathname;

    // Удаляем активный класс у всех пунктов
    navLinks.forEach(link => link.classList.remove('active'));

    // Проверяем каждый пункт меню
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Создаем регулярное выражение для точного совпадения
        const regex = new RegExp(`^${linkPath}(\/|$)`);

        // Если текущий путь соответствует регулярному выражению
        if (regex.test(currentPath)) {
            link.classList.add('active');
        }
    });

    // Если на корневой странице и нет активного пункта - выделяем "Главная"
    if ((currentPath === '/' || currentPath.endsWith('index.html')) &&
        !document.querySelector('#nav-menu ul li a.active')) {
        navLinks.forEach(link => {
            if (link.textContent === 'Главная') {
                link.classList.add('active');
            }
        });
    }
}

// Вызываем при загрузке и изменении URL (например, при навигации SPA)
document.addEventListener('DOMContentLoaded', setActiveMenuItem);
window.addEventListener('popstate', setActiveMenuItem); // Для SPA-навигации

// Обработчики кликов для пунктов меню
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Убираем стандартное поведение для SPA (если нужно)
        e.preventDefault();

        // Удаляем активный класс у всех
        navLinks.forEach(l => l.classList.remove('active'));

        // Добавляем активный класс текущему
        link.classList.add('active');

        // Здесь можно добавить код для загрузки контента
        window.location.href = link.href;
    });
});