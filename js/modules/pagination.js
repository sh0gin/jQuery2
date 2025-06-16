import { getFullPost } from "./blogs.js";
export { getHtmlPagination, giveNumPagination }


function getHtmlPagination() {
    $(".pagination").html("");
    $.ajax({
      url: "/getHtmlPagination.php",
      method: "POST",
      dataType: "json",
    //   data: $obj,
      success: function ($response) {
        $(".pagination").append($response);
      }})
}

function giveNumPagination() {
    $('body').on("click",".pagination-li" ,function(elem) {

        console.log(typeof $(this).attr("data-p"));
        // getFullPost()
    });
}