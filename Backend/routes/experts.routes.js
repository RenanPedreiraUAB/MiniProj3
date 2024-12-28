const express = require('express');
const router = express.Router();
const expertController = require('../controllers/expert.controller');

/**
 * @swagger
 * tags:
 *   name: Experts
 *   description: Gerenciamento de especialistas
 */

/**
 * @swagger
 * /api/experts:
 *   get:
 *     summary: Retorna todos os especialistas
 *     tags: [Experts]
 *     responses:
 *       200:
 *         description: Lista de especialistas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Expert'
 *       500:
 *         description: Erro no servidor
 */
router.get('/', expertController.getAllExperts);

/**
 * @swagger
 * /api/experts:
 *   post:
 *     summary: Adiciona um novo especialista
 *     tags: [Experts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Expert'
 *     responses:
 *       201:
 *         description: Especialista criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expert'
 *       400:
 *         description: Campos obrigatórios ausentes
 *       500:
 *         description: Erro no servidor
 */
router.post('/', expertController.addExpert);

/**
 * @swagger
 * /api/experts/{id}:
 *   put:
 *     summary: Atualiza um especialista pelo ID
 *     tags: [Experts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do especialista
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Expert'
 *     responses:
 *       200:
 *         description: Especialista atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Expert'
 *       404:
 *         description: Especialista não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.put('/:id', expertController.updateExpert);

/**
 * @swagger
 * /api/experts/{id}:
 *   delete:
 *     summary: Remove um especialista pelo ID
 *     tags: [Experts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do especialista
 *     responses:
 *       200:
 *         description: Especialista removido com sucesso
 *       404:
 *         description: Especialista não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.delete('/:id', expertController.deleteExpert);

module.exports = router;
