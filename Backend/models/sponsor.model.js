const mongoose = require('mongoose');

/**
 * @swagger
 * components:
 *   schemas:
 *     Sponsor:
 *       type: object
 *       required:
 *         - name
 *         - animal
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente pelo MongoDB
 *         name:
 *           type: string
 *           description: Nome do patrocinador
 *         animal:
 *           type: string
 *           description: Animal associado ao patrocinador
 *         description:
 *           type: string
 *           description: Breve descrição do patrocinador
 *         photoUrl:
 *           type: string
 *           format: url
 *           description: URL da foto ou logo do patrocinador
 *         link:
 *           type: string
 *           format: url
 *           description: Link do site do patrocinador
 *       example:
 *         name: "Banco XYZ"
 *         animal: "Tigre"
 *         description: "Patrocinador oficial do programa ANIMALEC."
 *         photoUrl: "https://example.com/logo.jpg"
 *         link: "https://bancoxyz.com"
 */

const SponsorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  animal: { type: String, required: true },
  description: String,
  photoUrl: String,
  link: String,
});

module.exports = mongoose.model('Sponsor', SponsorSchema);
