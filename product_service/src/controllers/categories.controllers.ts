import { Request, Response } from "express";
import { Category } from "../models/category.model";

export class CategoryController {
  // Créer une catégorie
  static async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      if (!name) return res.status(400).json({ message: "Le nom est requis." });

      const existing = await Category.findOne({ name });
      if (existing)
        return res.status(400).json({ message: "Catégorie déjà existante." });

      const category = await Category.create({ name });
      return res.status(201).json({ message: "Catégorie créée", category });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }

  // Lire toutes les catégories
  static async getAll(_req: Request, res: Response) {
    try {
      const categories = await Category.find();
      return res.json(categories);
    } catch (err) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }

  // Lire une catégorie par ID
  static async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await Category.findById(id);
      if (!category)
        return res.status(404).json({ message: "Catégorie introuvable" });
      return res.json(category);
    } catch (err) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      if (!name) return res.status(400).json({ message: "Le nom est requis." });

      const category = await Category.findByIdAndUpdate(
        id,
        { name },
        { new: true }
      );
      if (!category)
        return res.status(404).json({ message: "Catégorie introuvable" });

      return res.json({ message: "Catégorie mise à jour", category });
    } catch (err) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }

  // Supprimer une catégorie
  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await Category.findByIdAndDelete(id);
      if (!deleted)
        return res.status(404).json({ message: "Catégorie introuvable" });
      return res.json({ message: "Catégorie supprimée" });
    } catch (err) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }
}
