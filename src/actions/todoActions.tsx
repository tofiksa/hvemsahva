// make actions
import { createAction } from 'typesafe-actions';
import { Todo } from '../interfaces/todo';

// make todoActions
export const addTodo = createAction('ADD_TODO', (todo: Todo) => todo);
export const toggleTodo = createAction('TOGGLE_TODO', (id: string) => id);
export const removeTodo = createAction('REMOVE_TODO', (id: string) => id);
export const editTodo = createAction('EDIT_TODO', (todo: Todo) => todo);
export const completeAll = createAction('COMPLETE_ALL');
export const clearCompleted = createAction('CLEAR_COMPLETED');
export const setFilter = createAction('SET_FILTER', (filter: string) => filter);
export const setSearch = createAction('SET_SEARCH', (search: string) => search);