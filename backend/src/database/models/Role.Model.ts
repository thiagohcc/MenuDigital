import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';
import User from './User.Model';

class Role extends Model<InferAttributes<Role>,InferCreationAttributes<Role>> {
  declare id: number;
  declare roleName: string;
}

Role.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'role_name',
  }
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'role',
});

Role.hasMany(User, { foreignKey: 'role_id', as: 'users'})

export default Role;