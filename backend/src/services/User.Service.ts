import User from '../database/models/User.Model';

export default class UserService {
  getAll = async () => {
    try {
      const users = await User.findAll();
      return { type: 200, data: users }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  }
  getOne = async (id: number) => {
    try {
      const user = await User.findByPk(id);
      return { type: 200, data: user }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  }
  getByEmail = async (email: string) => {
    try {
      const user = await User.findOne({ where: { email } });
      return { type: 200, data: user }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  }
  getByRole = async (roleId: number) => {
    try {
      const users = await User.findAll({ where: { roleId } });
      return { type: 200, data: users }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  }
}