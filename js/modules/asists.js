export { hideAll, hideCorolLibAll }

function hideAll() { // Скрыват все страницы
    $("section").each(function () {
        $(this).addClass("not-active");
    });
}

function hideCorolLibAll() { // Убирает у всех пунктов меню подсветку
    $("nav[id=colorlib-main-menu] > ul > li > a").each(function () {
        $(this).removeClass("colorlib-active");
    });
}