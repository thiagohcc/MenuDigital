import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";
import db from '.';

class BillPaymentMethod extends Model<
  InferAttributes<BillPaymentMethod>,
  InferCreationAttributes<BillPaymentMethod>
  > {
    declare id: number;
    declare paymentMethodId: number;
    declare billId: number;
    declare amount: number;
}

BillPaymentMethod.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  paymentMethodId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'payment_method_id',
  },
  billId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'bill_id',
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'bill_payment_method',
});

export default BillPaymentMethod;