const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Listing = require('./Listing');

const Booking = sequelize.define('Booking', {
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'confirmed',
    },
});

Booking.belongsTo(User, { foreignKey: 'userId' });
Booking.belongsTo(Listing, { foreignKey: 'listingId' });

module.exports = Booking;
