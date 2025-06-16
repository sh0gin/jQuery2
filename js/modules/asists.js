export { hideAll, hideCorolLibAll, clearForm, clearPost }

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

function clearForm() {
    $("input").val("");
}

function clearPost() {
    $("input").val("");
    $("textarea").val("");
}