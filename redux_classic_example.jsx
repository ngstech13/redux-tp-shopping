import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

/**
 * 1. DÉFINITION DES ACTIONS
 * Une action est un objet simple avec une propriété 'type'.
 */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const incrementAction = () => ({ type: INCREMENT });
const decrementAction = () => ({ type: DECREMENT });

/**
 * 2. LE REDUCER
 * Une fonction pure qui décide comment l'état change en fonction de l'action.
 * (Ancien État, Action) => Nouvel État
 */
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

/**
 * 3. LE STORE
 * Le conteneur unique qui détient l'état de l'application.
 */
const store = createStore(counterReducer);

/**
 * 4. LE COMPOSANT REACT
 * Utilise 'useSelector' pour lire les données et 'useDispatch' pour envoyer des actions.
 */
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
      <h2>Compteur Redux Classique</h2>
      <h1 style={{ fontSize: '3rem', color: '#764abc' }}>{count}</h1>
      <div>
        <button 
          onClick={() => dispatch(decrementAction())}
          style={buttonStyle}
        >
          - Décrémenter
        </button>
        <button 
          onClick={() => dispatch(incrementAction())}
          style={buttonStyle}
        >
          + Incrémenter
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '1rem',
  cursor: 'pointer',
  backgroundColor: '#61dafb',
  border: 'none',
  borderRadius: '5px'
};

/**
 * 5. L'APPLICATION
 * Le 'Provider' rend le store accessible à tous les composants.
 */
export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
