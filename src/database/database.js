import { Sequelize } from "sequelize";

export const sequelize = new Sequelize ('Adincoha', 'postgres', 'Carambola83$', {
    host: 'localhost',
    dialect: 'postgres'
})