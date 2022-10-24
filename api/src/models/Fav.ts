const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
export = (sequelize: any) => {
  // defino el modelo
  sequelize.define('fav', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{ timestamps: false });
};