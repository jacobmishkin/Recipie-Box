const Mutation = {
  async createRecipe(parent, args, ctx, info) {
    // TODO: check if they are logged in
    const recipe = await ctx.db.mutation.createRecipe({
      data: {
        ...args,
      },
    }, info);
    return recipe;
  },
};

module.exports = Mutation;
