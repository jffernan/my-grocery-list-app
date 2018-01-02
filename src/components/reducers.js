import { combineReducers } from 'redux';

const item = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        text: action.text,
        purchased: false
      }
    case 'TOGGLE_ITEM':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        purchased: !state.purchased
      })
    default:
      return state
  }
};

const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ]
    case 'TOGGLE_ITEM':
      return state.map(t =>
        item(t, action)
      )
    default:
      return state
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
};

const reducers = combineReducers({
  items,
  visibilityFilter
});

export default reducers;

/*
const item = (state, action) => {
  switch (action.type) {
    case ‘ADD_ITEM’:
      return […state,{id: action.id, text: action.text,
        purchased:false}];

    case ‘TOGGLE_ITEM’:
      return state.map(item =>
        if (item.id !== action.id) {
          return item
        }
         return Object.assign({},
           item, {purchased: !item.purchased})
      );

    case ‘SET_VISIBILITY_FILTER’: {
     return action.filter
    };

    default:
      return state
    };
};
*/
