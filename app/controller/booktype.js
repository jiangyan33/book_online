'use strict';

const Controller = require('../core/baseController');

class BooktypeController extends Controller {
    async findAll() {
        try {
            let result = await this.service.booktype.findAll();
            this.succ(result);
        } catch (error) {
            this.logger.error(error);
            this.error('HANDLE_ERROR', error['message']);
        }
    }

    async findOne() {
        let id = this.ctx.params.id;
        if (!id) {
            this.logger.error('参数有误');
            this.error('PARAMETERS_ERROR', '参数有误');
        }
        try {
            id = parseInt(id);
            let result = await this.service.booktype.findOne(id);
            if (!result) {
                this.error('NULL_ERROR', 'not find data');
            } else {
                this.succ(result);
            }
        } catch (error) {
            this.logger.error(error);
            this.error('HANDLE_ERROR', error['message']);
        }
    }

    async update() {
        //参数验证
        try {
            this.ctx.validate({
                name: {//字符串 必填 不允许为空字符串 
                    type: 'string', required: true, allowEmpty: false
                },
                id: {//字符串 必填 不允许为空字符串 
                    type: 'int', required: true
                }
            }, this.ctx.request.body);
        } catch (e) {
            this.logger.error('参数有误');
            this.error('PARAMETERS_ERROR', '参数有误');
        }
        try {
            let result = await this.service.booktype.update(this.ctx.request.body);
            if (result.result.nModified == 0) {
                this.logger.error('修改失败');
            }
            this.succ({});
        } catch (error) {
            this.logger.error(error);
            this.error('HANDLE_ERROR', error['message']);
        }
    }

    async delete() {
        if (!this.ctx.params.id) {
            this.logger.error('参数有误');
            this.error('PARAMETERS_ERROR', '参数有误');
        }
        try {
            this.ctx.params.id = parseInt(this.ctx.params.id);
            let result = await this.service.booktype.delete(this.ctx.params.id);
            if (result.result.nModify == 0) {
                this.logger.error('删除失败');
                this.error('HANDLE_ERROR', '删除失败');
            }
            this.succ({});
        } catch (error) {
            this.logger.error(error);
            this.error('HANDLE_ERROR', error['message']);
        }
    }
    async add() {
        //参数验证
        try {
            this.ctx.validate({
                name: {//字符串 必填 不允许为空字符串 
                    type: 'string', required: true, allowEmpty: false
                }
            }, this.ctx.request.body);
        } catch (e) {
            this.logger.error('参数有误');
            this.error('PARAMETERS_ERROR', '参数有误');
        }
        try {
            let result = await this.service.booktype.add(this.ctx.request.body.name);
            if (result.ops.length == 0) {
                this.logger.error('没有添加成功');
                this.error('HANDLE_ERROR', '添加失败');
            }
            this.succ({});
        } catch (error) {
            this.logger.error(error);
            this.error('HANDLE_ERROR', error['message']);
        }
    }
}

module.exports = BooktypeController;
