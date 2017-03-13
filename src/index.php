<?php

	// include_once 'model/db.php';
	// $db_link = db_connect();

	$page_url = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

	$page_title = 'php-sass-gulp blank template';
	$page_description = '';
	$page_keywords = '';
	$page_h1 = 'php-sass-gulp blank template';

	// mysqli_close($db_link);

	include_once 'view/main.php';

?>
