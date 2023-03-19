import Sequelize from 'sequelize';
import dbconfig = require('./../config/postgres-db');

class Database {
  public connection!: Sequelize.Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    const databaseConfig: any = dbconfig;
    this.connection = new Sequelize.Sequelize(databaseConfig);
  }
}

const database: Database = new Database();

export default database;
