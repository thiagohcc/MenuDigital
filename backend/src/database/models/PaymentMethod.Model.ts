import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";
import db from '.';

import Bill from './Bill.Model';

class PaymentMethod extends Model<InferAttributes<PaymentMethod>,InferCreationAttributes<PaymentMethod>> {
  declare id: number;
  declare typeName: string;
}

PaymentMethod.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  typeName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'type_name',
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'payment_method',
});

PaymentMethod.belongsToMany(Bill, {
  through: 'bill_payment_method',
  foreignKey: 'payment_method_id',
  otherKey: 'bill_id',
  as: 'bills'
});

export default PaymentMethod;