'use strict';

module.exports = (sequelize, DataTypes) => {
    const Activity = sequelize.define('Activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unqiue: true,
            validate: {
              notEmpty: true
            }
        },
        deleted: DataTypes.BOOLEAN
      },{});

    Activity.associate = function(models) {
      Activity.belongsToMany(models.Workout, {through: "WorkoutActivities", as: "Activities"})
    }

    return Activity;
};