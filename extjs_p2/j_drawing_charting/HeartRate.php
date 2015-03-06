<?php

	$currentCount = isset($_POST['currentCount']) ? $_POST['currentCount'] : $_GET['currentCount'];
	$min = 150;
	$max = 180;
	
	$data = array();
	
	$data[] = array(
		'SecondsElapsed' => $currentCount,
		'BeatsPerMinute' => rand($min, $max)
	);
	
	$output = array(
		'success'=> true,
		'data' => $data,
		'results' => count($data)
	);
	
	print json_encode($output);

?>