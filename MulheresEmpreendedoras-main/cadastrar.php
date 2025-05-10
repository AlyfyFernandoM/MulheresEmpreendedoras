<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT); // Hash da senha
    $tipo = $_POST['tipo'];
    $mensagem = $_POST['mensagem'];

    // Verificar se o e-mail já existe
    $stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->rowCount() > 0) {
        echo "Erro: E-mail já cadastrado.";
        exit;
    }

    // Prepare a consulta
    $stmt = $pdo->prepare("INSERT INTO usuarios (nome, email, senha, tipo, mensagem) VALUES (?, ?, ?, ?, ?)");
    
    // Execute a consulta e verifique se foi bem-sucedida
    if ($stmt->execute([$nome, $email, $senha, $tipo, $mensagem])) {
        // Redirecionar para a página de login
        header("Location: login.html");
        exit;
    } else {
        echo "Erro ao cadastrar: " . implode(", ", $stmt->errorInfo());
    }
} else {
    echo "Método de requisição inválido.";
}
?>
