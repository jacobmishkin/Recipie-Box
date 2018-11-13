const { forwardTo } = require('prisma-binding');

const Query = {
  recipes: forwardTo('db'),
  // async recipes(parent, args, ctx, info) {
  //   const recipes = await ctx.db.query.recipes();
  //   console.log('recipes here');
  //   return recipes;
  // },
};

module.exports = Query;
