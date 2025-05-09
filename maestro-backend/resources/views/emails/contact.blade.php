<!DOCTYPE html>
<html>
<head>
    <title>Nouveau message de contact</title>
</head>
<body>
    <h2>Nouveau message de contact</h2>
    <p><strong>De:</strong> {{ $name }} ({{ $email }})</p>
    <p><strong>Sujet:</strong> {{ $subject }}</p>
    <p><strong>Message:</strong></p>
    <p>{{ $message }}</p>
</body>
</html> 