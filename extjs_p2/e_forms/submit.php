<?php

header('Content-type: application/json');

//Switch between these two to get a different result

/**
 * Response for a successful form submission
 */
echo '{"success": true, "message": "Your form has been saved!" }';

/**
 * Response when an error happens at the server-side
 */
//echo '{"success": false, "message": "There was an error saving the form"}';


?>