'use strict';

module.exports = (sequelize, DataTypes) => {
  const WorkoutActivities = sequelize.define('WorkoutActivities', {
    workout_id: DataTypes.INTEGER,
    activity_id: DataTypes.INTEGER,
    deleted: DataTypes.BOOLEAN
  }, {});

  return WorkoutActivities;
};