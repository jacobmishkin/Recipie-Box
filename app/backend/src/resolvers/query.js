const Query = {
  async recipes(parent, args, ctx, info) {
    const recipes = await ctx.db.query.recipes({
      data: {
        ...args,
      },
    }, info);
    return recipes;
  },
};

module.exports = Query;
