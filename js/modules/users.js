import { getUser } from "./getUser.js";
import { hideAll } from "./asists.js";
export { usersShow, permanent, banTimeShow, banTimeButton };

function usersShow() {
  // отображает страницу Пользоавтели
  $(".t-body").html("");
  $(".users").removeClass("not-active");
  $("a[data-section=users]").addClass("colorlib-active");
  getUsers();
}

function getUsers() {
  $.ajax({
    url: "/getUsers.php",
    method: "POST",
    dataType: "json",
    // data: { },
    success: function ($response) {
      let number = 1;
      $response.forEach(($value) => {
        $(".t-body").append(getUser($value, number));
        number++;
      });
    },
  });
  banTimeButton();
}

function permanent() {
  $("body").on("click", ".btn-outline-danger", function () {
    let $id_user = $(this).attr("data-user-id");

    $.ajax({
      url: "/permanent.php",
      method: "POST",
      dataType: "json",
      data: { id_user: $id_user },
      success: function () {},
    });
    usersShow();
  });
}

function banTimeShow() {
	$("body").on("click", ".btn-outline-warning", function() {
		hideAll();
		$(".contact-section-block").removeClass("not-active");
    let $id_user = $(this).attr('data-user-id');
    let $url = `https://blog/index.html?id_user=${$id_user}`;
    history.pushState({id_user: $id_user}, "", $url);
    $(".id-user-block").text(`Пользователь: ${$id_user}`);
	})
}

function banTimeButton() {
  $("body").on("click", ".button-block", function(elem) {
    elem.preventDefault();
    
    let $user_id = localStorage.getItem("id_user");
    let $date = $("input[id=date-block]").val();
    console.log($user_id, $date);
  })
}