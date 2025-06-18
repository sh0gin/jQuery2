import { getUser } from "./getUser.js";
export { usersShow }

function usersShow() { // отображает страницу Пользоавтели
    $('.users').removeClass("not-active");
    $('a[data-section=users]').addClass("colorlib-active");
    getUsers();
	permanent();
}

function getUsers() {
    $.ajax({
		url: "/getUsers.php",
		method: "POST",
		dataType: "json",
		// data: { },
		success: function ($response) {
			let number = 1;
            $response.forEach($value => {$(".t-body").append(getUser($value, number));  number++ });

		},
	});
}

function permanent() {
	$('body').on("click", ".btn-outline-danger", function() {
		let $id_user = $(this).attr("data-user-id");

		$.ajax({
		url: "/permanent.php",
		method: "POST",
		dataType: "json",
		data: { id_user: $id_user },
		success: function () {
			console.log("dsfsd");
		},
	});
	})}
