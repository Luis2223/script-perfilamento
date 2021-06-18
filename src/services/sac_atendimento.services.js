const SacAtendimentoModels = require("../models/sac_atendimento.models");

class SacAtendimentoServices {
    constructor({ database = '', hostname = '', username = '', password = '', dialect = '' }) {
        this.options = {
            database,
            hostname,
            username,
            password,
            dialect,
        };
        this.models = new SacAtendimentoModels(this.options);
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

module.exports = SacAtendimentoServices;