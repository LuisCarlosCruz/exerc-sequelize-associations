const Plan = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    plan_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    defaultValue: {
      type : DataTypes.STRING,
      allowNull : true,
      default: null
  },
  },
	{
	   underscored: true,
		 timestamps: false,
	});

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient, { foreignKey: 'plan_id', as: 'patients'});
  }

  return Plan;
};

module.exports = Plan;
