const users = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      uuid: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      role: {
        type: DataTypes.ENUM("ADMIN", "EMPLOYEE"),
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );

  return Users;
};

module.exports = users;
