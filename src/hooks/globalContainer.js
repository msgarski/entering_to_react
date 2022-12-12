import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

const useGlobalState = () => {
  const setState = useState(globalState)[1];
  const dispatch = (actionId) => {
    const newState = actions[actionId](globalState);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((element) => element !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initContainer = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, initialState };
  }
  actions = { ...actions, ...userActions };
};
// export default useGlobalState;
