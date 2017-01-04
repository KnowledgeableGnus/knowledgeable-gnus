import * as types from './types';
import Api from '../lib/api'

export function fetchRecipes(ingredients) {
  return (dispatch, getState) => {
    const params = [
    `ingredients=${encodeURIComponent(ingredients)}`,
    'fillIngredients=false',
    ]
    return Api.get('/recipes/findByIngredients?${params}')
    .then(resp => {
      dispatch(setSearchedRecipes({recipes: resp}));
      console.log(resp);
      }).catch((ex) => {
        console.log(ex);
      })
  }
}

export function fetchCoord(location) {
  return (dispatch, getState) => {
    return fetch('http://api.fixer.io/latest')
    .then((resp) => resp.json())
    .then(resp => {
      console.log('api respon', resp);
      dispatch(testy({test: resp}));
    })
  }
}

export function testy({ test }) {
  return {
    type: 'TEST',
    test
  }
}

// { recipes } = (args)  and inside args.recipes  === {recipes: recipes} inside return statement
export function setSearchedRecipes( { recipes } ) {
  return {
    type: types.SET_SEARCHED_RECIPES,
    recipes
  }
}

export function addRecipe() {
  return {
    type: types.ADD_RECIPE,
  }
}