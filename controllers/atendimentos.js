module.exports = app =>{
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos! Está realizando um GET'));

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você está na rota de atendimentos! Está realizando um POST')
    });
}
