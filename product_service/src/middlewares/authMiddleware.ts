import { Request, Response, NextFunction } from "express";
import { USER_SERVICE_URL } from "../constants/urls";

export interface User {
  id: string;
  username: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token manquant ou invalide." });
  }

  const token = authHeader.split(" ")[1];
  const USER_SERVICE_URL_CKECK = `${USER_SERVICE_URL}me/`;

  try {
    const response = await fetch(USER_SERVICE_URL_CKECK, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      return res.status(401).json({ message: "Utilisateur non autorisé." });
    }

    const user: User = await response.json();
    req.user = user;

    next();
  } catch (error) {
    console.error("Erreur middleware auth:", error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
}
