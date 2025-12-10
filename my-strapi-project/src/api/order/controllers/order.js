'use strict';

/**
 * order controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async find(ctx) {
    const user = ctx.state.user; // текущий авторизованный пользователь

    if (!user) return ctx.unauthorized("Not authenticated");

    // Фильтруем заказы по текущему user.id
    ctx.query.filters = {
      ...ctx.query.filters,
      users_permissions_user: {
        id: user.id
      }
    };

    const orders = await strapi.entityService.findMany('api::order.order', {
      ...ctx.query,
      populate: ['users_permissions_user']
    });

    return orders;
  },
}));
