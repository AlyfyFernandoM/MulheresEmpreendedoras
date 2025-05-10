<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $prestadora_id = $_POST['prestadora_id'];
    $servico = $_POST['servico'];
    $mensagem = $_POST['mensagem'];
    $contato = $_POST['contato'];

    $stmt = $pdo->prepare("INSERT INTO propostas (prestadora_id, servico, mensagem, contato) VALUES (?, ?, ?, ?)");
    if ($stmt->execute([$prestadora_id, $servico, $mensagem, $contato])) {
        echo "Proposta enviada com sucesso!";
    } else {
        echo "Erro ao enviar proposta.";
    }
}
?>
