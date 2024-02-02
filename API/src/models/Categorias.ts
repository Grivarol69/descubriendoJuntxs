// Import DataTypes from sequelize only if it's not imported yet
import { DataTypes } from 'sequelize';

export default (sequelize: any) => {
    sequelize.define('Categorias', {
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
        }
    });
};
