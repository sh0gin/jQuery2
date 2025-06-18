export { giveInputComment, answerShow, answerButton }
import { getPost } from "./blogs.js"
import { getAnswer } from "./getAnswer.js"
import { get } from "./asists.js"

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
                console.log($response);
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
    $("body").on("click", ".reply", function (elem) {
        console.log("сработала кнопка ответить");
        let $id_com = $(this).attr("data-com");
        
        let $id = get("id");
        let $url = `https://localhost?comment: ${$id_com}`;
        history.pushState({id: $id, comment: $id_com}, "");

        elem.preventDefault();

        $(".post-content").html("");
        $(".answer-section").removeClass('not-active');

    })
}

function answerButton() {
    $(".answer-form").submit(function (elem) {
        elem.preventDefault();
        console.log($(".answer-form").val());
        // let $formData = new FormData(this);

        let $token = localStorage.getItem("token");
        let $id_comment = get("id");
        let $id_post = get("comment");

        // $formData.append('token', $token);
        // $formData.append('id_comment', $id_comment);
        // $formData.append('id_comment', $id_post);

        // console.log($formData);
        // $.ajax({
        //     url: "/work_answer.php",
        //     method: "POST",
        //     dataType: "json",
        //     data: $formData,
        //     success: function ($response) {
        //         console.log($response);
        //     },
        // });
        // console.log($(".answer-form").val());
        // console.log("answerButton");
    })
}