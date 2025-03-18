const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/:shortenedLink', (req, res) => {
    const shortenedLink = req.params.shortenedLink;

    // Verificando o link encurtado
    if (shortenedLink === 'abc123') {
        return res.redirect('https://geniustradingbot.com/login/');
    }

    // Página de erro caso o link não seja reconhecido
    return res.send(`
        <html>
            <head>
                <title>Acesso Expirado</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; }
                    h1 { color: red; }
                    p { font-size: 18px; }
                    .whatsapp-btn { padding: 10px 20px; background-color: green; color: white; text-decoration: none; font-size: 18px; border-radius: 5px; }
                </style>
            </head>
            <body>
                <h1>Acesso Expirado</h1>
                <p>Seu acesso de teste expirou. Por favor, entre em contato com o proprietário do bot para cadastrar um novo acesso.</p>
                <p>Clique no botão abaixo para enviar uma mensagem diretamente no WhatsApp:</p>
                <a href="https://wa.me/5516981424934?text=Ol%C3%A1%2C%20quero%20obter%20acesso%20ao%20bot%21" class="whatsapp-btn">Entrar em contato</a>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
