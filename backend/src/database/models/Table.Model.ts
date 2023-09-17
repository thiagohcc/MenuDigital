import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';

import Bill from './Bill.Model';

class Table extends Model<InferAttributes<Table>,InferCreationAttributes<Table>> {
  declare id: number;
  declare isOccupied: boolean;
}

Table.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  isOccupied: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_occupied',
  }
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: "table"
});

Table.hasMany(Bill, { foreignKey: 'table_id', as: 'bills'});

export default Table;