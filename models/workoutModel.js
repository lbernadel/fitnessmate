'use strict';

module.exports = (sequelize, DataTypes) => {
    const Workout = sequelize.define('Workout', {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        isComplete: {
            type: DataTypes.BOOLEAN
        },
        deleted: DataTypes.Boolean
    },{});

    return Workout;
}