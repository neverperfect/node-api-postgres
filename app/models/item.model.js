module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("item", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      }
    });
  
    return Item;
  };
