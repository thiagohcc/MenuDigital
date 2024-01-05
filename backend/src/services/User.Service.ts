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
  post = async (user: User) => {
    try {
      const userExists = await User.findOne({ where: { email: user.email } });
      if (user.email == userExists?.email) return { type: 401, message: 'Email já cadastrado!' }
      const newUser = await User.create(user);
      return { type: 200, data: newUser }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  }

  put = async (id: number, user: User) => {
    try {
      const updatedUser = await User.update(user, { where: { id } });
      return { type: 200, data: updatedUser }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  }

  delete = async (id: number) => {
    try {
      const user = await User.findByPk(id);
      if (!user) return { type: 404, message: 'Usuário não encontrado' }
      await user.destroy();
      return { type: 200, message: 'Usuário deletado' }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  }
}