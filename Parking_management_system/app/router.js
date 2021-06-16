'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post("/login", controller.login.index);
  router.post("/reinstall", controller.reinstall.index);
  router.post("/register", controller.register.index);
  router.post("/addcar", controller.car.addcar);
  router.post("/car_modify", controller.car.car_modify);
  router.post("/car_delete", controller.car.car_delete);
  router.post("/alternick", controller.alternick.index);
  router.post("/getcar", controller.getcar.index);
  router.post("/reserve", controller.reserve.index);
  router.post("/order_total", controller.order.total);
  router.post("/order_finished", controller.order.finished);
  router.post("/order_notfinished", controller.order.notfinished);
  router.post("/order_modify", controller.order.modify);
  router.post("/modify_message", controller.order.message);
  router.post("/order_delete", controller.order.delete);
  router.post("/get_used_place", controller.used.place);
  router.post("/modify_used_place", controller.used.modify);
};