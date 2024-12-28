const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const { swaggerUi, swaggerSpec } = require('./swagger/swagger');

const app = express();
const PORT = 3000;

// Conectar ao MongoDB
connectDB();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas
app.use('/api/sponsors', require('./routes/sponsors.routes'));
app.use('/api/experts', require('./routes/experts.routes'));

// Rota raiz
app.get('/', (req, res) => {
  res.send('Backend adicional do ANIMALEC está rodando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
