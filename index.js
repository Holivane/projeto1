const customExpress = require('./config/custmExpress')

const app = customExpress()

app.listen(3000, () => console.log('servidor rodando na porta 3000'));

