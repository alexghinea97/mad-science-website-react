let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: 'POST_BOOK',
    id: nextTodoId++,
    text
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
