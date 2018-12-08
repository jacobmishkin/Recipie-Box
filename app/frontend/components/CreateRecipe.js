import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Form from './styles/Form';
import Error from './ErrorMessage';

const CREATE_RECIPIE_MUTATION = gql`
  mutation CREATE_RECIPIE_MUTATION(
    $title: String!
    $description: String!
    $ingredients: [Json!]
    $directions: [Json!]
  ) {
    createRecipe(
      title: $title
      description: $description
      ingredients: { set: $ingredients }
      directions: { set: $directions }
    ) {
      id
      title
      description
      ingredients
      directions
    }
  }
`;
class CreateRecipe extends Component {
  state = {
    title: 'cheese cake',
    description: 'what a cake',
    image: 'jam.jpg',
    largeImage: 'large-jam.jpg',
    directions: [{ direction: '' }],
    ingredients: [{ ingredient: '' }],
  };

  handleChange = e => {
    if (['ingredient'].includes(e.target.className)) {
      const ingredients = [...this.state.ingredients];
      ingredients[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ ingredients });
    } else if (['direction'].includes(e.target.className)) {
      const directions = [...this.state.directions];
      directions[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ directions });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  addIngredients = e => {
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, { ingredient: '' }],
    }));
  };

  addDirections = e => {
    this.setState(prevState => ({
      directions: [...prevState.directions, { direction: '' }],
    }));
  };

  render() {
    const { ingredients, directions } = this.state;
    return (
      <Mutation mutation={CREATE_RECIPIE_MUTATION} variables={this.state}>
        {(createRecipie, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createRecipie();
              console.log(res);
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="text"
                  name="title"
                  placeholder="Title"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="description">
                Description
                <textarea
                  type="textarea"
                  id="description"
                  name="description"
                  placeholder="description"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
              <button type="button" onClick={this.addIngredients}>
                Add ingredients
              </button>
              {ingredients.map((val, idx) => {
                const ingredientsId = `ingredient-${idx}`;

                return (
                  <div key={idx}>
                    <label htmlFor="ingredients">Ingredients</label>
                    <input
                      type="text"
                      name={ingredientsId}
                      data-id={idx}
                      id={ingredientsId}
                      placeholder={`Ingredient ${idx + 1}`}
                      value={ingredients[idx].name}
                      className="ingredient"
                      onChange={this.handleChange}
                    />
                  </div>
                );
              })}
              <button type="button" onClick={this.addDirections}>
                Add Directions
              </button>
              <label htmlFor="directions">Directions</label>
              {directions.map((val, idx) => {
                const directionsId = `directions-${idx}`;

                return (
                  <div key={idx}>
                    <textarea
                      type="textarea"
                      name={directionsId}
                      placeholder={`Direction ${idx + 1}`}
                      data-id={idx}
                      id={directionsId}
                      value={directions[idx].name}
                      className="direction"
                      onChange={this.handleChange}
                    />
                  </div>
                );
              })}
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}
export default CreateRecipe;
export { CREATE_RECIPIE_MUTATION };
