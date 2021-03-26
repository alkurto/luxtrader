const user_icon = document.querySelector('.user-header__icon');
const user_menu = document.querySelector('.user-header__menu');

user_icon.addEventListener('click', function(e) {
    user_menu.classList.toggle('_active');
})

document.addEventListener("click", (e) => {
    if (!e.target.closest('.user-header')) {
        user_menu.classList.remove('_active');
    }
})