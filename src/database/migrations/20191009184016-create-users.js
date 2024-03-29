'use strict';
// npx sequelize migration:create --name=NomeDaMigration
// npm sequelize db:migrate - Crita migration no banco
module.exports = {
  up: (queryInterface, Sequelize, DataTypes) => {
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password_hash: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        provider: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },      
      });
  },

  down: queryInterface => {
      return queryInterface.dropTable('users');
  }
};
