const express = require('express');

const server = express();

server.use(express.json());

const usuarios = [];


server.get('/', (req,res) =>{
    return res.json({
        result: 'Cadastro de usuários'
    });
});


server.post('/dados_usuarios', (req,res) =>{
    const nome = req.body.nome;
    const email = req.body.email;
    const idade = req.body.idade;
    const telefone = req.body.telefone;

    const dados_usuarios = {
        nome,
        email,
        idade,
        telefone
    };

    usuarios.push(dados_usuarios);

    return res.json({
        result:'Usuário cadastrado'
    });

});


server.get('/lista_usuarios', (req,res) => {
    
    return res.json(usuarios);
});










server.listen(3000);