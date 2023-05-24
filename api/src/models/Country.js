const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital:{
      type: DataTypes.STRING,
      //allowNull: false
    },
    subregion:{
      type: DataTypes.STRING,
      
    },
    area:{
      type: DataTypes.INTEGER,
      
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
  },
  { timestamps: false });
};
