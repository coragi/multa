<?php
	header('Content-Type: application/json; charset=utf-8');
	header("Access-Control-Allow-origin: *");

	require_once ('../chave_registro.php');
	$conn = "mysql:host=".$db_servidor.";dbname=".$db_banco.";charset=utf8mb4";
	
	$db = new PDO($conn, $db_usuario, $db_senha, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
		
	$sql = "SELECT count(*) as cnt
					FROM sis_transacao
					WHERE ide_troca = 0";
	
	$stmt = $db->prepare($sql);
			
	$stmt->execute();
	$result = $stmt->fetchAll();
	
	$row_set = array();
	$row_set['cnt'] = $result[0]['cnt'];
	$output = json_encode($row_set);
			
	echo $output;

?>		