import Table from '../database/models/Table.Model';

export default class TableService {
  getAll = async () => {
    try{
      const tables = await Table.findAll();
      return { type: 200, data: tables }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  }
  getOne = async (id: number) => {
    try{
      const table = await Table.findByPk(id);
      return { type: 200, data: table }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  }
  getAllUnoccupied = async () => {
    try{
      const tables = await Table.findAll({ where: { isOccupied: false } });
      return { type: 200, data: tables }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  }
}