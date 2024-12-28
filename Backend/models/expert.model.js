const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Expert:
 *       type: object
 *       required:
 *         - name
 *         - animaliaFamily
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente pelo MongoDB
 *         name:
 *           type: string
 *           description: Nome do especialista
 *         animaliaFamily:
 *           type: string
 *           description: Família Animalia à qual o especialista está associado
 *         description:
 *           type: string
 *           description: Breve descrição do especialista
 *         photoUrl:
 *           type: string
 *           format: url
 *           description: URL da foto do especialista
 *         contactInfo:
 *           type: string
 *           description: Informações de contato do especialista
 *       example:
 *         name: "Sr. Michael Zenin"
 *         animaliaFamily: "Aves"
 *         description: "Especialista em aves tropicais, com foco em comportamento e conservação."
 *         photoUrl: "https://example.com/michael-zenin.jpg"
 *         contactInfo: "michael.zenin@avesconservation.org"
 */

const ExpertSchema = new mongoose.Schema({
  name: { type: String, required: true },
  animaliaFamily: { type: String, required: true },
  description: String,
  photoUrl: String,
  contactInfo: String,
});

module.exports = mongoose.model('Expert', ExpertSchema);
