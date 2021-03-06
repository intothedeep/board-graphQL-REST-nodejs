module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            userId: {
                type: DataTypes.STRING,
                allowNull: false,
                onDelete: 'CASCADE'
            }
        }, {
            freezeTableName: true,
        }
    );

    Post.associate = (models) => {
        Post.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'postId',
            sourceKey: 'id',
            onDelete: 'CASCADE'
        });
        Post.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId',
            targetKey: 'id',
            onDelete: 'CASCADE'
        });
    };

    return Post;
}