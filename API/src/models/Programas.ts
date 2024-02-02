const { DataTypes } = require('sequelize');


export default sequelize => {

    sequelize.define('Programas', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                    msg: "Name is required"
                },
                notEmpty: {
                    msg: "Name can't be empty"
                },
                len: {
                    args: [5, 50],
                    msg: "Name must be between 3 and 50 characters"
                }
            }
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Description can't be empty"
                },
                len: {
                    args: [10, 1000],
                    msg: "Desciption must be between 10 and 1000 characters"
                },
                is: {
                    args: /^[a-z0-9\s.,!?]+$/i,  // permite caracteres alfanuméricos, espacios y signos de puntuación
                    msg: "Description must only contain alphanumeric characters, spaces, and punctuation"
                    }
                }
            },
            costoReferencia: {
                type: DataTypes.FLOAT,
                validate: {
                  isFloat: {
                    msg: "Costo Referencia must be a floating-point number",
                  },
                },
              },
            estado: {
                type: DataTypes.STRING,
                validate:{

                }
            },
            idCategoria:{
                type: DataTypes.INTEGER,
                allowNull: false,
                refences: {
                    model: "Categorias",
                    key: "id"
                }
            }
        }
    )
}