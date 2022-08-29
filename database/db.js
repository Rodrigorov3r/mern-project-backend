import { Sequelize } from 'sequelize'

const db = new Sequelize('database_blog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db