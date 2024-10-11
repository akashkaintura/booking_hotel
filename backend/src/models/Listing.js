const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Listing = sequelize.define('Listing', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
});

Listing.belongsTo(User, { foreignKey: 'userId' });

module.exports = Listing;
