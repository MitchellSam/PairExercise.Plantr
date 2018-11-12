const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr')

const Gardener = db.define('gardner', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

const Plot = db.define('plot', {
    size: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    shaded: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

const Vegetable = db.define('vegetable', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    },
    planted_on: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})

module.exports = db


// db.connect((err) => {
//     if (err) {
//       console.error('connection error', err.stack)
//     } else {
//       console.log('connected')
//     }
//   })

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })