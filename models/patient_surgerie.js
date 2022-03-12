const Patient_surgerie = (sequelize, DataTypes) => {
  const Patient_surgerie = sequelize.define('Patient_surgeries',
  {},
	{
    timestamps: false,
    underscored: true
	});

  Patient_surgerie.associate = (models) => {
    models.Surgerie.belongsToMany(models.Patient, {
      as: 'patients',
      through: Patient_surgerie,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });

    models.Patient.belongsToMany(models.Surgerie, {
      as: 'surgeries',
      through: Patient_surgerie,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };

  return Patient_surgerie;
};

module.exports = Patient_surgerie;
