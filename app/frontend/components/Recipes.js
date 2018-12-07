import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Recipe from './Recipe';

const ALL_RECIPES_QUERY = gql`
  query ALL_RECIPES_QUERY {
    recipes {
      id
      title
      description
      image
      largeImage
      ingredients
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const RecipesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Recipes extends Component {
  render() {
    return (
      <Center>
        <Query query={ALL_RECIPES_QUERY}>
          {({ data, error, loading }) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <RecipesList>
                {data.recipes.map(recipe => (
                  <Recipe key={recipe.id} recipe={recipe} />
                ))}
              </RecipesList>
            );
          }}
        </Query>
      </Center>
    );
  }
}

export default Recipes;
export { ALL_RECIPES_QUERY };
