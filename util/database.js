const Sequelize = require('../util/database')



const sequelize = new Sequelize('attendence_db', 'root', 'root@321', {
    host: 'localhost',
    dialect: 'mysql' /* one of | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });