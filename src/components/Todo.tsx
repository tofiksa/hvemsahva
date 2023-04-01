// make todolist component
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import { ITodo } from '../interfaces/todo';
import { AppState } from '../reducers';
import { TodoList } from './TodoList';



export const Todo = () => {
    const [todo, setTodo] = useState<ITodo>({
        id: '',
        title: '',
        completed: false,
    });
    const dispatch = useDispatch();
    const todos = useSelector((state: AppState) => state.todos);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, title: e.target.value });
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo({
        id: '',
        title: '',
        completed: false,
        });
    }
    
    return (
        <div>
        <h1>Todo</h1>
        <TodoList todos={todos} />
        <Form onSubmit={handleSubmit}>
            <Form.Item>
            <Input value={todo.title} onChange={handleChange} />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit">Add</Button>
            </Form.Item>
        </Form>
        </div>
    );
    }


