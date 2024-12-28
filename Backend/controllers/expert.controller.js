const Expert = require('../models/expert.model');

/**
 * @swagger
 * tags:
 *   name: Experts
 *   description: Gerenciamento de especialistas
 */

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

// Buscar todos os especialistas
exports.getAllExperts = async (req, res) => {
  try {
    const experts = await Expert.find();
    if (experts.length === 0) {
      return res.status(200).json({ message: "Nenhum especialista encontrado." });
    }
    res.json(experts);
  } catch (err) {
    res.status(500).json({ message: "Ocorreu um erro ao buscar os especialistas." });
  }
};

// Adicionar um especialista
exports.addExpert = async (req, res) => {
  if (!req.body.name || !req.body.animaliaFamily) {
    return res.status(400).json({ message: "Os campos 'nome' e 'família Animalia' são obrigatórios." });
  }

  const expert = new Expert({
    name: req.body.name,
    animaliaFamily: req.body.animaliaFamily,
    description: req.body.description,
    photoUrl: req.body.photoUrl,
    contactInfo: req.body.contactInfo,
  });

  try {
    const newExpert = await expert.save();
    res.status(201).json({ message: "Especialista adicionado com sucesso!", data: newExpert });
  } catch (err) {
    res.status(400).json({ message: "Ocorreu um erro ao adicionar o especialista." });
  }
};

// Atualizar um especialista pelo ID
exports.updateExpert = async (req, res) => {
  try {
    const updatedExpert = await Expert.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedExpert) {
      return res.status(404).json({ message: "Especialista não encontrado." });
    }
    res.status(200).json({ message: "Especialista atualizado com sucesso!", data: updatedExpert });
  } catch (err) {
    res.status(500).json({ message: "Erro ao atualizar o especialista.", error: err.message });
  }
};

// Remover um especialista pelo ID
exports.deleteExpert = async (req, res) => {
  try {
    const deletedExpert = await Expert.findByIdAndDelete(req.params.id);
    if (!deletedExpert) {
      return res.status(404).json({ message: "Especialista não encontrado." });
    }
    res.status(200).json({ message: "Especialista removido com sucesso." });
  } catch (err) {
    res.status(500).json({ message: "Erro ao remover o especialista.", error: err.message });
  }
};
