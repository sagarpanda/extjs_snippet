<?php 


$total = 6000; //$_GET['total'];
$limit = $_GET['limit'];
$start = $_GET['start'];

$invoices = array();

$statuses = array('Paid', 'Viewed', 'Draft', 'Partial');

for($i = $start; $i < $start + $limit; $i++){
	
	$invoice = array('InvoiceID' => ($i),
        'Client' => 'Global Interactive Technologies (' . ($i) . ')',
        'Description' => 'Creating an Invoice management system',
        'Date' => date("c", rand(time()-63113851,time())),
        'Amount' => number_format((rand()+1)/100, 2),
        'Currency' => 'GBP',
        'Status' => $statuses[rand(0,3)]);
	
	$invoices[] = $invoice;
}

echo json_encode(array('success' => true, 'total' => $total, 'rows' => $invoices));

?>