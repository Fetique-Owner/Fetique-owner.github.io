
.vscode/
.idea/

.DS_Store
Thumbs.db

*.backup
*.tmp

http://fetique.com/* https://fetique.com/:splat 301!
http://www.fetique.com/* https://www.fetique.com/:splat 301!
/* /index.html 200

![fetique](https://github.com/user-attachments/assets/7c6436f5-0287-45e6-9dda-285127117e7c)

[index.html](https://github.com/user-attachments/files/21948797/index.html)<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Fetique - Ваша вселенная цифровых активов">
    <title>Fetique | Скоро запуск</title>
		<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="seo-hidden" aria-hidden="true">
    <h1>Fetique</h1>
    <p>Ваша вселенная цифровых активов.</p>
  </div>
</body>
</html>

[style.css](https://github.com/user-attachments/files/21948798/style.css)
body {
	background-image: url("fetique.jpg");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-color: black;
	margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.seo-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}
