'use strict';

const Service = require('egg').Service;

class BooktypeService extends Service {
    async findAll() {
        return await this.app.mongo.db.collection('book_type').find({ status: 1 }, { projection: { 'status': 0 } }).toArray();
    }

    async findOne(id) {
        return await this.app.mongo.db.collection('book_type').findOne({ _id: id, status: 1 }, { projection: { 'status': 0 } });
    }

    async update(booktype) {
        return await this.app.mongo.db.collection('book_type').updateOne({ _id: booktype['id'] }, { $set: { name: booktype['name'] } });
    }

    async delete(id) {
        return await this.app.mongo.db.collection('book_type').update({ _id: id }, { $set: { status: 0 } });
    }

    async add(name) {
        //获取主键信息
        let index = await this.app.mongo.db.collection('index').findOneAndUpdate({ _id: 'book_type' }, { $inc: { number: 1 } });
        let booktype = {
            _id: index.value.number,
            name: name,
            status: 1
        }
        return await this.app.mongo.db.collection('book_type').insert(booktype);
    }
}

module.exports = BooktypeService;
