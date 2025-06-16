export { usersShow }

function usersShow() { // отображает страницу Пользоавтели
    $('.users').removeClass("not-active");
    $('a[data-section=users]').addClass("colorlib-active");
}

