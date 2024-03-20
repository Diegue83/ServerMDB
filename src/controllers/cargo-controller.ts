import { Request, Response } from "express";
import cargo from "../models/cargo-model";

class CargoController{

    public async get(req: Request, res: Response) {
        try {
            const cargos = await cargo.find();
            return res.status(201).json(cargos);
        } catch (error) {
            return res.status(500).json({ error: "Error interno del servidor" });
        }
    }
}

export const cargoController= new CargoController();