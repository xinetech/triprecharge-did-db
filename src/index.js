const driver = require('bigchaindb-driver');
const Connection = require('./connection.js');
const OrmObject = require('./ormobject.js');

class Orm {
    constructor(url,headers){
        this.url = url;
        this.conn = new Connection(this.url);
        if (headers && headers.app_id !== undefined && headers.app_id !== '') {
            this.appId = headers.app_id
        } else {
            this.appId = 'global'
        }
        this.models = [];
        this.driver = driver;
    }

    define(modelName, modelSchema) {
        this.models[modelName] = new OrmObject(
            modelName,
            modelSchema,
            this.conn,
            this.appId
        )
    }
}

module.exports = Orm;