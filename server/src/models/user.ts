import { Sequelize, DataTypes } from 'sequelize'

const user = (sequelize: Sequelize) => {
    return sequelize.define('users', {
        name: {
            type: DataTypes.STRING(10),
        },
        email: {
            type: DataTypes.STRING(30),
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        }
    })
}

export default user