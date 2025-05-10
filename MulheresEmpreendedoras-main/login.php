<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    // Verifique se o usuário existe
    $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = ?");
    $stmt->execute([$usuario]);
    $usuario = $stmt->fetch();

    if ($usuario) {
        if (password_verify($senha, $usuario['senha'])) {
            // Login bem-sucedido
            // Redirecionar para a página do painel
            header("Location: painel-empresa.html");
            exit;
        } else {
            echo "Erro: Senha incorreta.";
        }
    } else {
        echo "Erro: Usuário não encontrado.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
