const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ANIMALEC API',
      version: '1.0.0',
      description: 'API de Sponsors e Experts do ANIMALEC',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      schemas: {
        Expert: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Nome do especialista' },
            animaliaFamily: { type: 'string', description: 'Família Animalia' },
            description: { type: 'string', description: 'Descrição do especialista' },
            photoUrl: { type: 'string', format: 'url', description: 'URL da foto do especialista' },
            contactInfo: { type: 'string', description: 'Informações de contato' },
          },
          required: ['name', 'animaliaFamily'],
        },
        Sponsor: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Nome do patrocinador' },
            animal: { type: 'string', description: 'Animal patrocinado' },
            description: { type: 'string', description: 'Descrição do patrocinador' },
            photoUrl: { type: 'string', format: 'url', description: 'URL da foto do patrocinador' },
            link: { type: 'string', format: 'url', description: 'Link do patrocinador' },
          },
          required: ['name', 'animal'],
        },
      },
    },
  },
  apis: ['./routes/*.js'], // Caminho para as rotas
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
