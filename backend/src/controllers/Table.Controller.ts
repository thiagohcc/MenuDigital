import { Request, Response } from "express";
import TableService from '../services/Table.Service';

export default class TableController {
  public async getAll (req: Request, res: Response): Promise<Response> {
    try {
      const { type, data, message } = await new TableService().getAll();
      return res.status(type).json({ data, message });
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  public async getOne (req: Request, res: Response): Promise<Response> {
    try {
      const { type, data, message } = await new TableService().getOne(parseInt(req.params.id));
      return res.status(type).json({ data, message });
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  public async getAllUnoccupied (req: Request, res: Response): Promise<Response> {
    try {
      const { type, data, message } = await new TableService().getAllUnoccupied();
      return res.status(type).json({ data, message });
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  public async post (req: Request, res: Response): Promise<Response> {
    try {
      const { type, data, message } = await new TableService().post(req.body);
      return res.status(type).json({ data, message });
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  public async put (req: Request, res: Response): Promise<Response> {
    try {
      const { type, data, message } = await new TableService().put(parseInt(req.params.id), req.body);
      return res.status(type).json({ data, message });
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await new TableService().delete(parseInt(req.params.id));
      return res.status(type).json({ message });
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }
}