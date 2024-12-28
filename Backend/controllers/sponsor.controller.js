const Sponsor = require('../models/sponsor.model');

/**
 * @swagger
 * tags:
 *   name: Sponsors
 *   description: Gerenciamento de patrocinadores
 */

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

// Buscar todos os patrocinadores
exports.getAllSponsors = async (req, res) => {
  try {
    const sponsors = await Sponsor.find();
    if (sponsors.length === 0) {
      return res.status(200).json({ message: "Nenhum patrocinador encontrado." });
    }
    res.json(sponsors);
  } catch (err) {
    res.status(500).json({ message: "Ocorreu um erro ao buscar os patrocinadores." });
  }
};

// Adicionar um patrocinador
exports.addSponsor = async (req, res) => {
  if (!req.body.name || !req.body.animal) {
    return res.status(400).json({ message: "Os campos 'nome' e 'animal' são obrigatórios." });
  }

  const sponsor = new Sponsor({
    name: req.body.name,
    animal: req.body.animal,
    description: req.body.description,
    photoUrl: req.body.photoUrl,
    link: req.body.link,
  });

  try {
    const newSponsor = await sponsor.save();
    res.status(201).json({ message: "Patrocinador adicionado com sucesso!", data: newSponsor });
  } catch (err) {
    res.status(400).json({ message: "Ocorreu um erro ao adicionar o patrocinador." });
  }
};

// Atualizar um patrocinador pelo ID
exports.updateSponsor = async (req, res) => {
  try {
    const updatedSponsor = await Sponsor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSponsor) {
      return res.status(404).json({ message: "Patrocinador não encontrado." });
    }
    res.status(200).json({ message: "Patrocinador atualizado com sucesso!", data: updatedSponsor });
  } catch (err) {
    res.status(500).json({ message: "Erro ao atualizar o patrocinador.", error: err.message });
  }
};

// Remover um patrocinador pelo ID
exports.deleteSponsor = async (req, res) => {
  try {
    const deletedSponsor = await Sponsor.findByIdAndDelete(req.params.id);
    if (!deletedSponsor) {
      return res.status(404).json({ message: "Patrocinador não encontrado." });
    }
    res.status(200).json({ message: "Patrocinador removido com sucesso." });
  } catch (err) {
    res.status(500).json({ message: "Erro ao remover o patrocinador.", error: err.message });
  }
};
