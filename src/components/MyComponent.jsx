// import React, { useReducer, useContext } from 'react';

// // Create a context
// const MyContext = React.createContext();

// // Define a reducer
// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

// function MyComponent() {
//   // Use the reducer and the initial state to create a state object
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   // Use the context to pass the state and dispatch function down to child components
//   return (
//     <MyContext.Provider value={{ state, dispatch }}>
//       {/* Child components go here */}
//     </MyContext.Provider>
//   );
// }

// function ChildComponent() {
//   // Use the context to access the state and dispatch function
//   const { state, dispatch } = useContext(MyContext);

//   return (
//     <div>
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//       <p>Count: {state.count}</p>
//     </div>
//   );
// }
