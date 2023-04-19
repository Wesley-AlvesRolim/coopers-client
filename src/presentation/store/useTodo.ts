import { useLandingTodo, useAuthenticatedTodo, useAuth } from '.';

let isAuthenticated = false;

const check = () => {
  isAuthenticated = useAuth.getState().isAuthenticated;
  useAuth.subscribe((state) => {
    isAuthenticated = state.isAuthenticated;
  });
};

const useTodoHook = () => {
  check();
  return isAuthenticated ? useAuthenticatedTodo : useLandingTodo;
};

export default useTodoHook;
