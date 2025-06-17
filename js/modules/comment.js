export { giveInputComment, answerShow }
import { getPost } from "./blogs.js"
import { getAnswer } from "./getAnswer.js"

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
        // console.log("pagnitions");
        // console.log($(this).attr("data-com"));
        // console.log($(this).attr("data-post"));
        $("div > .answer-section").append(`<h2 class="h3">Ответ пользователю:</h3>
                <div class="row block-9">
                    <div class="col-lg-6 d-flex">
                        <form enctype="multipart/form-data" action="" method="post" class="bg-light p-5 contact-form">

                            <div class="form-group">
                                <textarea name="message" id="content" cols="30" rows="10" class="form-control"
                                    placeholder="Answer" name="content"></textarea>
                                <div class="invalid-feedback">
                                </div>
                            </div>
    
                            <div class="form-group">
                                <input type="submit" data-post='123123213123' data-com='123123213123' value="Ответить" class="btn btn-primary py-3 px-5 answer-button">
                            </div>
                        </form>
    
                    </div> comment.js:40:17​`);
        console.log(getAnswer("123123213123"));
        if ($(".answer-section").length) {
            console.log("we did search it!");
        }

    })
}

function answerButton() {
    $("body").on("click", ".answer-button", function (e) {

    })
}