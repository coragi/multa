<?php
	header('Content-Type: application/json; charset=utf-8');
	header("Access-Control-Allow-origin: *");

	// $q é a variável que vai dizer qtos registros tenho que buscar

	$num = 40;
	if (isset($_GET["num"]) ) {
		if ( !empty($_GET["num"]) ) {
			$num = (int)$_GET["num"];
		}
	}
	require_once ('../chave_registro.php');
	$conn = "mysql:host=".$db_servidor.";dbname=".$db_banco.";charset=utf8mb4";
	
	$db = new PDO($conn, $db_usuario, $db_senha, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
	
	$sql = "SELECT DATE_FORMAT(t.dat_data, '%H:%i') as horario, j.des_nome as jogador, j.pes_id as pes_id,	
				j.des_posicao as posicao, j.des_overall as overall,
				format(t.des_valor,0,'de_DE') as proposta, u1.des_nick as roubado, u2.des_nick as ladrao
				FROM sis_transacao t, sis_jogador j, sis_usuario u1, sis_usuario u2
				WHERE t.ide_troca = 0 AND t.jogador_id = j.id AND u1.id = t.vende_usuario_id AND u2.id = t.compra_usuario_id
				ORDER by t.id DESC
				LIMIT ?";

	
	$stmt = $db->prepare($sql);
	$stmt->bindValue(1, $num, PDO::PARAM_INT);
			
	$stmt->execute();
	$result = $stmt->fetchAll();
	
	$row_set = array();
	foreach ($result as $r) {
		$row['horario'] = $r['horario'];
		$row['jogador'] = $r['jogador'];	
		$row['pes_id'] = $r['pes_id'];	
		$row['posicao'] = $r['posicao'];	
		$row['overall'] = $r['overall'];	
		$row['proposta'] = $r['proposta'];	
		$row['roubado'] = $r['roubado'];	
		$row['ladrao'] = $r['ladrao'];	
		
		$row_set[] = $row;
	}

	$output = json_encode($row_set);
			
	echo $output;

?>		