'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  //图书类型
  //获取所有可用的图书类型
  router.get('/book_online/booktypes', controller.booktype.findAll);

  router.get('/book_online/booktypes/:id', controller.booktype.findOne);

  router.put('/book_online/booktypes', controller.booktype.update);

  router.delete('/book_online/booktypes/:id', controller.booktype.delete);

  router.post('/book_online/booktypes', controller.booktype.add);


};
