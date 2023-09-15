import { Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize";
import db from '.';

class BillProductConsume extends Model<
  InferAttributes<BillProductConsume>,
  InferCreationAttributes<BillProductConsume>
  > {
    declare id: number;
    declare billId: number;
    declare productId: number;
}

BillProductConsume.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  billId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'build_id',
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id',
  }
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'bill_product_consume',
});

export default BillProductConsume;