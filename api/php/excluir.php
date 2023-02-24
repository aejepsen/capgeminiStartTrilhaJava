<?php

include("conexao.php");

$obterDados = file_get_contents('php://input');

$extrair = json_decode($obterDados);

// extrair dados do arquivo json
$idCurso = $extrair->cursos->idCurso;

$sql = "DELETE FROM cursos WHERE idCurso = $idCurso";

mysqli_query($conexao, $sql);

// exportar dados para o banco de dados

?>