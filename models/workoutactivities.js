'use strict';

module.exports = (sequelize, DataTypes) => {
  const WorkoutActivities = sequelize.define('WorkoutActivities', {
    WorkoutId: DataTypes.INTEGER,
    ActivityId: DataTypes.INTEGER,
    deleted: DataTypes.BOOLEAN
  }, {});

  return WorkoutActivities;
};