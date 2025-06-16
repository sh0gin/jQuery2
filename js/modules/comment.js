export { giveInputComment, answerShow }
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
                if ($response.status) { // исполняеться если валидация нашла ошибку
                    $("textarea[name='message']").addClass("is-invalid");
                    $(".name-message-comment").text($response.valid_message);
                    // $("body > .post").html(""); // нужно сделать чтобы комментарий добавлялся сразу же
                } else {
                    $("textarea[name='message']").removeClass("is-invalid");
                    getPost($post_id);
                }
            }
        })
    })
}

function answerShow() {
    $("body").on("click", ".reply", function (e) {
        e.preventDefault();
        $(".post-content").html("");

        console.log("pagnition");
        $("body").find(".answer").removeClass("not-active");
    })
}

function answerButton() {
    $("body").on("click", ".answer-button", function (e) {
        
    })
}