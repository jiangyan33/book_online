'use strict';

const Service = require('egg').Service;

class BookService extends Service {
    async findAll() {
        try {
            return await this.app.mongo.db.collection('book').find({}).toArray();
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = BookService;