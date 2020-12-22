 <?php
//header setting
 header('Content-Type: application/json');

 //database
 define('DB_HOST', '127.0.0.1');
 define('DB_USERNAME', 'root');
 define('DB_PASSWORD', '');
 define('DB_NAME', 'user-accounts');

 //get connection
 $mysqli = new mysqli(DB_HOST,DB_USERNAME,DB_PASSWORD,DB_NAME);
 if(!$mysqli){
 	die("Connection failed: " . $mysqli->error);
 }
 //query the data
 $query = sprintf("SELECT playerid, score FROM score ORDER BY playerid");
 //execute query
 $result = $mysqli->query($query);
 //loop through the returned data
 $data = array();
 foreach ($result as $row) {
 	# code...
 	$data[] = $row;
 }
//free mem associated with result
 $result -> close();
 //close connection
 $mysqli->close();
 //print the data
 print json_decode($data); 
 ?>