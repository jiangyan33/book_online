'use strict';

const Controller = require('../core/baseController');

class BookController extends Controller {
    async findAll() {
        //controller可以直接拿到service
        //再contrller中使用try,catch捕获异常
        try {
            let result = await this.service.book.findAll();
            this.succ(result);
        } catch (e) {
            this.logger.error(e);
            this.error('HANDLE_ERROR', error['message']);
        }
    }
}
module.exports = BookController;
