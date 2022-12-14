const Sequelize = require('sequelize');
const sequelize = require('./db');

const { DataTypes } = Sequelize;

const Addresses = sequelize.define(
  'addresses',
  {
    street_address: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.STRING,
    },
    postal_code: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state_province: {
      type: DataTypes.STRING,
    },
    client_id: {
      type: DataTypes.INTEGER,
    },

  },
  {
    underscored: true,
  },
);

module.exports = Addresses;
