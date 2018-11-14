const Query = {
  async recipes(parent, args, ctx, info) {
    const recipes = await ctx.db.query.recipes();
    return recipes;
  },
};

module.exports = Query;
