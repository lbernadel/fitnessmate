'use strict';

module.exports = (sequelize, DataTypes) => {
  const WorkoutActivities = sequelize.define('WorkoutActivities', {
    workout_id: DataTypes.Intger,
    activity_id: DataTypes.Intger,
    deleted: DataTypes.Boolean
  }, {});

  return WorkoutActivities;
};