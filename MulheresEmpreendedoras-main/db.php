<?php
$host = 'localhost';
$db = 'missao_empreendedoras';
$user = 'root'; // padrão do XAMPP
$pass = ''; // padrão do XAMPP

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
// CREATE DATABASE missao_empreendedoras;
// CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo ENUM('empresa', 'profissional') NOT NULL,
    mensagem TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE propostas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prestadora_id INT,
    status ENUM('Pendente', 'Aceita', 'Recusada') DEFAULT 'Pendente',
    servico VARCHAR(100),
    mensagem TEXT,
    contato VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (prestadora_id) REFERENCES usuarios(id)
);
