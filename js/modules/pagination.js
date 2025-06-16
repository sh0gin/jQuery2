import { getFullPost } from "./blogs.js";
export { getHtmlPagination, giveNumPagination }


function getHtmlPagination($num_page=0) {
    $(".pagination").html("");
    $.ajax({
      url: "/getHtmlPagination.php",
      method: "POST",
      dataType: "json",
      data: { page : $num_page},
      success: function ($response) {
        $(".pagination").append($response);
      }})
}

function giveNumPagination() { // вызывает страницу с постами смотря на номер страницы
    $('body').on("click",".pagination-li" , function() {

        let $number = Number($(this).attr("data-p"));
        getFullPost($number);
    });
}