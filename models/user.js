const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                validate: {
                    is: /^[0-9a-z]+$/i
                }
            },
            name: {
                type:DataTypes.STRING,
                allowNull: false,
            }
            // email: {
            //     type: DataTypes.STRING,
            //     unique: true,
            //     allowNull: false,
            //     validate: {
            //         isEmail: true
            //     }
            // },
            // name: {
            //     type: DataTypes.STRING,
            //     primaryKey: true,
            // },
            // password: DataTypes.STRING
        }, {
            freezeTableName: true,
            // instanceMethods: {
            //     validPassword(password) {
            //         return bcrypt.compare(password, this.password);
            //     }
            // }
        }
    );

    // TODO test
    // User.beforeBulkCreate((users, options) => {
    //     return users.map(user => {
    //         user.dataValues.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
    //         return user;
    //     });
    // });

    // User.beforeCreate((user, options) => {
    //     user.dataValues.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
    //     return user;
    // });

    User.associate = (models) => {
        User.hasMany(models.Post, {
            as: 'posts',
            foreignKey: 'userId',
            sourceKey: 'id',
            onDelete: 'CASCADE'
        });
        User.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'userId',
            sourceKey: 'id',
            onDelete: 'CASCADE'
        });
    };
    return User;
}