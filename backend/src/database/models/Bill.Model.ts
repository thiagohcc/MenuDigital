import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';

import PaymentMethod from './PaymentMethod.Model';
import Product from './Product.Model';
import Table from './Table.Model';

class Bill extends Model<InferAttributes<Bill>, InferCreationAttributes<Bill>> {
  declare id: number;
  declare clientName: string;
  declare amount: number;
  declare isOpen: boolean;
  declare date: Date;
  declare startTime: string;
  declare closeTime: string;
  declare billPaymentMethodId: number;
}

Bill.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  clientName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'client_name',
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: 0
  },
  isOpen: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_open',
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.TIME,
  },
  closeTime: {
    type: DataTypes.TIME,
  },
  billPaymentMethodId: {
    type: DataTypes.INTEGER,
    field: 'bill_payment_method_id',
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'bill'
});

Bill.belongsTo(Table, {
  foreignKey: 'table_id',
  as: 'table'
});

Bill.belongsToMany(PaymentMethod, {
  through: 'bill_payment_method',
  foreignKey: 'bill_id',
  otherKey: 'payment_method_id',
  as: 'payment_methods'
});

Bill.belongsToMany(Product, {
  through: 'bill_product_consume',
  foreignKey: 'bill_id',
  otherKey: 'product_id',
  as: 'products',
});

export default Bill;
