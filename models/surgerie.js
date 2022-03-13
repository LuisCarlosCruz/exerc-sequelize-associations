const Surgerie = (sequelize, DataTypes) => {
  const Surgerie = sequelize.define('Surgerie', {
    surgery_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
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

  return Surgerie;
};

module.exports = Surgerie;
