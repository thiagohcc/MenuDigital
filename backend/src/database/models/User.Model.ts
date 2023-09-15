import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';

import Role from './Role.Model';

class User extends Model<InferAttributes<User>,InferCreationAttributes<User>> {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare roleId: number;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'role_id',
    defaultValue: 0,
  }
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'user',
});

User.belongsTo(Role, { foreignKey: 'role_id', as: 'role'});

export default User;