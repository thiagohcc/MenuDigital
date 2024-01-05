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

  post = async (table: Table) => {
    try{
      const newTable = await Table.create(table);
      return { type: 200, data: newTable }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  }

  put = async (id: number, table: Table) => {
    try{
      const updatedTable = await Table.update(table, { where: { id } });
      return { type: 200, data: updatedTable }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  }

  delete = async (id: number) => {
    try{
      const table = await Table.findByPk(id);
      if(!table) return { type: 404, message: 'Table not found' }
      await table.destroy();
      return { type: 200, message: 'Table deleted' }
    } catch (err) {
      return { type: 500, message: (err as Error).message }
    }
  }
}