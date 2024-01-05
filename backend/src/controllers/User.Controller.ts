import { Request, Response } from 'express';
import UserService from '../services/User.Service';

export default class UserController {
  public async getAll (req: Request, res: Response): Promise<Response> {
    try {
      const { type, data, message } = await new UserService().getAll();
      return res.status(type).json({ data, message });
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  public async getOne (req: Request, res: Response): Promise<Response> {
    try {
      const { type, data, message } = await new UserService().getOne(parseInt(req.params.id));
      return res.status(type).json({ data, message });
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  public async post (req: Request, res: Response): Promise<Response> {
    try {
      const { type, data, message } = await new UserService().post(req.body);
      return res.status(type).json({ data, message });
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  public async put (req: Request, res: Response): Promise<Response> {
    try {
      const { type, data, message } = await new UserService().put(parseInt(req.params.id), req.body);
      return res.status(type).json({ data, message });
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    try {
      const { type, message } = await new UserService().delete(parseInt(req.params.id));
      return res.status(type).json({ message });
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }
}