import { Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
import db from '.';
import Bill from './Bill.Model';

class Product extends Model<InferAttributes<Product>,InferCreationAttributes<Product>> {
  declare id: number;
  declare name: string;
  declare simpleDescription: string;
  declare descripion: string | null;
  declare price: number;
}

Product.init({
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
  simpleDescription: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'simple_description',
  },
  descripion: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  }
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
  modelName: 'product',
});

Product.belongsToMany(Bill, {
  through: 'bill_product_consume',
  foreignKey: 'product_id',
  otherKey: 'bill_id',
  as: 'bills',
});

export default Product;