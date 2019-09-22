import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

//state
export interface StoreState {
  name: string;
  enthusiasmLevel: number;
}

//action types
export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

export interface IncrementEnthusiasm {
  type: INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

//action creators
export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: DECREMENT_ENTHUSIASM
  };
}

const initialState = {
  enthusiasmLevel: 1,
  name: 'Joe'
};

//reducer
export function enthusiasm(
  state: StoreState = initialState,
  action: EnthusiasmAction
): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
  }
  return state;
}

export default function configureStore(preloadedState: any) {
  const middlewares: never[] = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancer = compose(middlewareEnhancer);

  const store = createStore(enthusiasm, preloadedState, enhancer);
  return store;
}
export const store = configureStore(initialState);
