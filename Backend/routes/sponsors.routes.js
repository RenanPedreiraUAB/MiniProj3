const express = require('express');
const router = express.Router();
const sponsorController = require('../controllers/sponsor.controller');

/**
 * @swagger
 * tags:
 *   name: Sponsors
 *   description: Gerenciamento de patrocinadores
 */

/**
 * @swagger
 * /api/sponsors:
 *   get:
 *     summary: Retorna todos os patrocinadores
 *     tags: [Sponsors]
 *     responses:
 *       200:
 *         description: Lista de patrocinadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sponsor'
 *       500:
 *         description: Erro no servidor
 */
router.get('/', sponsorController.getAllSponsors);

/**
 * @swagger
 * /api/sponsors:
 *   post:
 *     summary: Adiciona um novo patrocinador
 *     tags: [Sponsors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sponsor'
 *     responses:
 *       201:
 *         description: Patrocinador criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sponsor'
 *       400:
 *         description: Campos obrigatórios ausentes
 *       500:
 *         description: Erro no servidor
 */
router.post('/', sponsorController.addSponsor);

/**
 * @swagger
 * /api/sponsors/{id}:
 *   put:
 *     summary: Atualiza um patrocinador pelo ID
 *     tags: [Sponsors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do patrocinador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sponsor'
 *     responses:
 *       200:
 *         description: Patrocinador atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sponsor'
 *       404:
 *         description: Patrocinador não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.put('/:id', sponsorController.updateSponsor);

/**
 * @swagger
 * /api/sponsors/{id}:
 *   delete:
 *     summary: Remove um patrocinador pelo ID
 *     tags: [Sponsors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do patrocinador
 *     responses:
 *       200:
 *         description: Patrocinador removido com sucesso
 *       404:
 *         description: Patrocinador não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/:id', sponsorController.deleteSponsor);

module.exports = router;
