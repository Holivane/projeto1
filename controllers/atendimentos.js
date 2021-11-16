module.exports = app =>{
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos! Está realizando um GET'));
}
