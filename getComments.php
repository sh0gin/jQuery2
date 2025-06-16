<?php

require_once __DIR__ . '/mainPhp.php';

$sql =  $mysql->select("SELECT id, role FROM user WHERE token='{$_POST['token']}'")[0];
$id = $sql['id'];
$role = $sql['role'];
echo json_encode([$comment->get_comments((int) $_POST["id_post"]), $id, $role]);