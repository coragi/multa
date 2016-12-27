<?php
	header('Content-Type: application/json; charset=utf-8');
	header("Access-Control-Allow-origin: *");
	
	$t = "00";
	if (isset($_GET["t"]) ) {
		if ( !empty($_GET["t"]) ) {	
			$t = $_GET["t"];
		}
	}	
	
	require_once ('../chave_registro.php');
	
	$conn = "mysql:host=".$db_servidor.";dbname=".$db_banco.";charset=utf8mb4";
	$db = new PDO($conn, $db_usuario, $db_senha, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
	
	$sql = "SELECT u.des_nick, format(u.num_saldo,0,'de_DE') as saldo,
			MAX(DATE_FORMAT(ADDTIME(t.dat_data, '00:".$t.":00.000000'), '%H:%i')) as roubo_ate
			FROM sis_usuario u
			LEFT JOIN sis_transacao t
			ON (u.id = t.vende_usuario_id)
			AND t.ide_troca = 0
			WHERE u.ide_serie < 5
			GROUP BY u.des_nick, format(u.num_saldo,0,'de_DE')
			ORDER BY 1 DESC";
	$stmt = $db->prepare($sql);
	$stmt->execute();	
	$result = $stmt->fetchAll();	
	$row_set = array();
	
	foreach ($result as $r) {
		$row['des_nick'] = $r['des_nick'];
		$row['saldo'] = $r['saldo'];
		if ($t == "00") {
			$row['roubo_ate'] = "00:00";
		} else {
			$row['roubo_ate'] = $r['roubo_ate'];
		}
		$row_set[] = $row;
	}
	$output = json_encode($row_set);
	echo $output;
?>		