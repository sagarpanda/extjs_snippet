<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "connect.php";

// Get values
$page   = isset($_GET['page']) ? $_GET['page'] : 1;
$start  = isset($_GET['start']) ? $_GET['start'] : 0;
$limit  = isset($_GET['limit']) ? $_GET['limit'] : 10;
$search = isset($_GET['search']) ? $_GET['search'] : '';
$action = isset($_GET['act']) ? $_GET['act'] : 'read';

if ($action == 'read') {
	$qStr = "";
	if ($search != "") {
		$qStr = "where name like '%$search%'";
	}
	$sql 	= "SELECT SQL_CALC_FOUND_ROWS * FROM user $qStr LIMIT $start, $limit";
	$sql2 	= "SELECT FOUND_ROWS()";

	$result 	= $conn->query($sql);
	$result2	= $conn->query($sql2);
	$total 		= $result2->fetch_row()[0];

	$data = array();
	if ($result->num_rows > 0) {
	    while($row = $result->fetch_assoc()) {
	    	$data[] = $row;
	    }
	}

} elseif ($action == 'create') {
	$data = json_decode(file_get_contents('php://input'), true);

	$total 	= 1;
	$name 	= $data['name'];
	$email 	= $data['email'];
	$phone 	= $data['phone'];

	$sql 	= "insert into user set name='$name', email='$email', phone='$phone'";
	$result = $conn->query($sql);

	$data['id']	= $conn->insert_id;

} elseif ($action == 'update') {
	$data = json_decode(file_get_contents('php://input'), true);

	$total 	= 1;
	$name 	= $data['name'];
	$email 	= $data['email'];
	$phone 	= $data['phone'];
	$id 	= $data['id'];

	$sql 	= "update user set name='$name', email='$email', phone='$phone' where id=$id";
	$result = $conn->query($sql);

} elseif ($action == 'delete') {
	$data = json_decode(file_get_contents('php://input'), true);
	
	$total  = 1;
	$name 	= $data['name'];
	$email 	= $data['email'];
	$phone 	= $data['phone'];
	$id 	= $data['id'];

	$sql 	= "delete from user where id=$id";
	$result = $conn->query($sql);

}
$conn->close();

$output = array(
	'total' 	=> $total,
	'results' 	=> $limit,
	'success'	=> true,
	'action'	=> $action,
	'items' 	=> $data
);

print json_encode($output);
?>