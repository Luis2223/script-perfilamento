const { Sequelize } = require("sequelize");

class SacAtendimentoModels {

    constructor({ database = '', hostname = '', username = '', password = '', dialect = '', port = 1433 }) {
        this.options = {
            database,
            hostname,
            username,
            password,
            dialect,
            port,
        }
        this.sequelize = new Sequelize(this.options);
    }

    async insertValuesIntoTable(table, values = {}) {
        try {
            return console.log(await this.sequelize.query(`INSERT INTO ${table} 
            (${Object.keys(values)}) 
            VALUES 
            (${Object.values(values)}) `))
        } catch (error) {
            throw Object({
                message: `Its not possible insert into table ${table} the values ${JSON.stringify(values)}`,
                stack: error
            })
        }
    }

}

module.exports = SacAtendimentoModels;