// make AppState interface

import { ITodo } from "./interfaces/todo";

export interface AppState {
    todos: ITodo[];
    filter: string;
    search: string;
}