const Patient = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patient_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullname: DataTypes.STRING,
    plan_id: DataTypes.INTEGER,
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

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, { foreignKey: 'plan_id', as: 'plan' });
  }

  return Patient;
};

module.exports = Patient;
