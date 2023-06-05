// import { createStore } from "redux";
const createStore = require("redux").createStore;

//###### Actions
const BUY_POKEMON = "BUY_POKEMON";
const buy_pokemon_action = (cant) => {
  return {
    type: BUY_POKEMON,
    payload: cant,
  };
};
//###### Reducers
const default_games_state = {
  pokemon: 10,
};
const games_reducer = (state = default_games_state, action) => {
  switch (action.type) {
    case BUY_POKEMON: {
      return {
        pokemon: state.pokemon - action.payload,
      };
    }
    default:
      return state;
  }
};

//###### Store
const store = createStore(games_reducer);
console.log("Estado Inicial: ", store.getState());
store.subscribe(() => {
  console.log("Cambio de estado: ", store.getState());
});
store.dispatch(buy_pokemon_action(3));