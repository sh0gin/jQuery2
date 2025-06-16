export { giveInputComment }
import { getPost } from "./blogs.js"

function giveInputComment() {

    $('body').on("click", "input[name=send_comment]", function (e) {
        e.preventDefault();

        let $message = $("#message").val();
        let $post_id = $(".comment-form-wrap").attr("data-id");
        let $token = localStorage.getItem("token");
        $.ajax({
            url: '/work_post.php',
            method: 'POST',
            dataType: "json",
            data: { message: $message, post_id: $post_id, token: $token },
            success: function ($response) {
                if ($response.status) {
                    console.log("123");
                    $("textarea[name='message']").addClass("is-invalid");
                    $(".name-message-comment").text($response.valid_message);
                    $("body > .post").html(""); // нужно сделать чтобы комментарий добавлялся сразу же
                } else {
                    $("textarea[name='message']").removeClass("is-invalid");
                }
            }
        })
    })


}