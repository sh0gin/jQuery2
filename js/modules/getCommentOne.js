export { getCommentOne };

function getCommentOne($oneCommentObject, $idActive, $role) {

	if (!(typeof $oneCommentObject === 'string')) {
		$idActive = Number($idActive)
		
		if ($role === "0") {
			$role = false;
		} else {
			$role = true;
		}
		console.log($oneCommentObject);
		const el = `<li ` + ($oneCommentObject.comment_id ? `id='special-li'` : ``) + `class="comment">
											
											<div class="comment-body">
											
												<div class="d-flex justify-content-between">
													<h3>${$oneCommentObject.user.login}</h3>` + 
													($oneCommentObject.user.id == $idActive || $role ?
													`<a href="" class="text-danger" style="font-size: 1.8em;"
														title="Удалить">🗑</a>` : "") +
												`</div>
						
												<div class="meta">
													${$oneCommentObject.date}
												</div>
												<p>
													${$oneCommentObject.message}
												</p>` +
												(!$oneCommentObject.comment_id ? `<p><a href="#" data-post='${$oneCommentObject.id}' data-com='${$oneCommentObject.post_id}' class="reply"> Ответить</a></p>` : ``) +
													($oneCommentObject.user.id == $idActive || $role ?
													`<a href="#" ' class="text-danger" style="font-size: 1.8em;"
														title="Удалить">🗑</a>` : "") +
												`<!-- <p><a href="#" class="reply" > Ответить</a></p> -->
											</div>
	
										</li>`;
		return el;
	}

	return "";


}
