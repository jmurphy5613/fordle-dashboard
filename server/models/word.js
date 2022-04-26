module.exports = (sequelize, DataTypes) => {
    const Word = sequelize.define('Word', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        word: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customMessage: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Word;
}