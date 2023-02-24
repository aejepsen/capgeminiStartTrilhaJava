<?php

include("conexao.php");

$obterDados = file_get_contents('php://input');

$extrair = json_decode($obterDados);

// extrair dados do arquivo json
$nomeCurso = $extrair->cursos->nomeCurso;
$valorCurso = $extrair->cursos->valorCurso;

$sql = "INSERT INTO cursos (nomeCurso, valorCurso) VALUES ('$nomeCurso', $valorCurso)";

mysqli_query($conexao, $sql);

// exportar dados para o banco de dados
$curso = [
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso
];

json_encode(['cursos'] => $cursos);

?>