const reviews = (sequelize, DataTypes) => {
  const Reviews = sequelize.define(
    "reviews",
    {
      uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("PENDING", "COMPLETED"),
        allowNull: false,
      },
      comments: {
        type: DataTypes.STRING(150),
      },
    },
    {
      paranoid: true,
    }
  );

  Reviews.associate = (models) => {
    Reviews.belongsTo(models.Users, {
      foreignKey: {
        name: "reviewerId",
      },
      as: "reviewer",
      onDelete: "CASCADE",
    });
    Reviews.belongsTo(models.Users, {
      foreignKey: {
        name: "revieweeId",
      },
      as: "reviewee",
      onDelete: "CASCADE",
    });
  };

  return Reviews;
};

module.exports = reviews;
