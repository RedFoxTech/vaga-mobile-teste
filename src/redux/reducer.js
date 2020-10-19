import {createStore} from 'redux';

const initialState = {
  pokemons: [],
  pokemon: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_POKEMONS':
      return {...state, pokemons: action.pokemons};
    case 'GET_POKEMON':
      return {...state, pokemon: action.infos};
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
