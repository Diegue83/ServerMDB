import { Request, Response } from "express";
import ciudad from "../models/ciudad-model";

class CiudadController{

    public async get(req: Request, res: Response) {
        try {
            const ciudades = await ciudad.find();
            return res.status(201).json(ciudades);
        } catch (error) {
            return res.status(500).json({ error: "Error interno del servidor" });
        }
    }
}

export const ciudadController=new CiudadController();