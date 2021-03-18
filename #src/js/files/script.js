const user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener('click', function(e) {
    const user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('_active');
})

document.addEventListener("click", (e) => {
    if (!e.target.closest('.user-header')) {
        const user_menu = document.querySelector('.user-header__menu');
        user_menu.classList.remove('_active');
    }
})