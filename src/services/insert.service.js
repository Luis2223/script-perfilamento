const InsertModel = require("../models/insert.model");

class InsertService {
    constructor({ database = '', hostname = '', username = '', password = '', dialect = '' }) {
        this.options = {
            database,
            hostname,
            username,
            password,
            dialect,
        };
        this.models = new InsertModel(this.options);
    }

    async insertValues(table, values = {}) {
        try {
            const result = await this.models.insertValuesIntoTable(table, values);
            return result;
        } catch (error) {
            throw new Object({
                message: `Its not possible insert into table ${table} the values ${JSON.stringify(values)}`,
                stack: error
            })
        }
    }
}

module.exports = InsertService;