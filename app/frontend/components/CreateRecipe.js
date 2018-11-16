import React, { Component } from 'react';
import { Mutation } from 'apollo-client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Form from './styles/Form';

class CreateRecipe extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    preperationTime: 0,
    cookingTime: 0,
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
      directions: [...prevState.directions, { directions: '' }],
    }));
  };

  render() {
    const { ingredients, directions } = this.state;
    return (
      <Form>
        <fieldset>
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
          <label htmlFor="ingredients">Ingredients</label>
          {ingredients.map((val, idx) => {
            const ingredientsId = `ingredient-${idx}`;

            return (
              <div key={idx}>
                <input
                  type="text"
                  name={ingredientsId}
                  placeholder={`ingredient ${idx + 1}`}
                  data-id={idx}
                  id={ingredientsId}
                  value={ingredients[idx].name}
                  className="ingredient"
                  onChange={this.handleChange}
                />
              </div>
            );
          })}
          <button type="button" onClick={this.addDirections}>
            Add directions
          </button>
          <label htmlFor="directions">Directions</label>
          {directions.map((val, idx) => {
            const directionsId = `ingredient-${idx}`;

            return (
              <div key={idx}>
                <textarea
                  type="textarea"
                  name={directionsId}
                  placeholder={`direction ${idx + 1}`}
                  data-id={idx}
                  id={directionsId}
                  value={directions[idx].name}
                  className="direction"
                  onChange={this.handleChange}
                />
              </div>
            );
          })}
        </fieldset>
      </Form>
    );
  }
}
export default CreateRecipe;
