<!DOCTYPE html>
<html lang="ru">
<head>

	<meta charset="utf-8">

	<base href="">

	<title><?=$page_title?></title>
	<meta name="description" content="<?=$page_description?>">
	<meta name="keywords" content="<?=$page_keywords?>">

	<meta name="robots" content="all">

	<meta property="og:url" content="<?=$page_url?>">
	<meta property="og:title" content="<?=$page_title?>">
	<meta property="og:description" content="">
	<meta property="og:site_name" content="">

	<meta http-equiv="content-language" content="ru">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<meta name="theme-color" content="#fff">
	<meta name="msapplication-navbutton-color" content="#fff">
	<meta name="apple-mobile-web-app-status-bar-style" content="#fff">

	<link rel="canonical" href="<?=$page_url?>">
	<link rel="icon" href="fico/favicon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="fico/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="fico/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="fico/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="fico/apple-touch-icon-114x114.png">

	<style>
		/* ../css/head.min.css */
	</style>

	<?php include_once 'load_css_js.php';?>
	<script>loadCSS( "css/project.min.css?ver=1.0.0", false, "all" );</script>
	<noscript>
		<link rel="stylesheet" href="css/project.min.css">
	</noscript>

	<!--[if lt IE 9]>
	<script src="libs/es5-shim/es5-shim.min.js"></script>
	<script src="libs/es5-shim/es5-sham.min.js"></script>
	<script src="libs/html5shiv/dist/html5shiv.min.js"></script>
	<script src="libs/html5shiv/dist/html5shiv-printshiv.min.js"></script>
	<script src="libs/respond/dest/respond.min.js"></script>
	<script src="libs/ExplorerCanvas/excanvas.js"></script>
	<![endif]-->

	<!-- Load Scripts Start -->
	<script>
		var scr = {"scripts":[
			{"src" : "js/project.min.js", "async" : false}
		]};
	</script>
	<?php include_once 'load_js_js.php';?>
	<!-- Load Scripts End -->

</head>
<body>

	<header>
		<h1><?=$h1?></h1>
	</header>

</body>
</html>
