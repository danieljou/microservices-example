import { Request, Response } from "express";
import { Category } from "../models/category.model";
import { Product } from "../models/product.models";

export class ProductController {
  static async create(req: Request, res: Response) {
    try {

      const owner = req.user?.id;
      if (!owner) {
        return res
          .status(401)
          .json({ message: "Utilisateur non authentifié." });
      }

      const { name, category } = req.body;

      const cat = await Category.findById(category);
      if (!cat) {
        return res.status(400).json({ message: "Catégorie invalide." });
      }

      const product = await Product.create({ name, category, owner });
      return res.status(201).json({ message: "Produit créé", product });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }

  static async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await Product.where({ owner: req.user?.id })
        .findById(id)
        .populate("category");
      if (!product)
        return res.status(404).json({ message: "Produit introuvable" });
      return res.json(product);
    } catch (err) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const products = await Product.where({ owner: req.user?.id })
        .find()
        .populate("category");
      return res.json(products);
    } catch (err) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updates = req.body;

      if (updates.category) {
        const cat = await Category.where({ owner: req.user?.id }).findById(
          updates.category
        );
        if (!cat)
          return res.status(400).json({ message: "Catégorie invalide." });
      }

      const product = await Product.findByIdAndUpdate(id, updates, {
        new: true,
      });
      if (!product)
        return res.status(404).json({ message: "Produit introuvable" });

      return res.json({ message: "Produit mis à jour", product });
    } catch (err) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await Product.where({
        owner: req.user?.id,
      }).findByIdAndDelete(id);
      if (!deleted)
        return res.status(404).json({ message: "Produit introuvable" });
      return res.json({ message: "Produit supprimé" });
    } catch (err) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
  }
}
