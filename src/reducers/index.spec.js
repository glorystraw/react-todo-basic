import reducer from './index';
import { toggleTodo, deleteTodo, addTodo, editTodo } from '../actions';

describe('todos reducer', () => {

    it('should handle initial state', () => {
        const initialState = [{}];
        expect(
            reducer(undefined, {})
        ).toEqual(initialState)
    });

    it('should handle ADD_TODO', () => {
        expect(
            reducer([], addTodo(0, 'Run the tests'))
        ).toEqual([
            {
                title: 'Run the tests',
                completed: false,
                id: 0
            }
        ]);
    });

    it('should handle TOGGLE_TODO by id', () => {
        expect(
            reducer([
                {
                    title: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    title: 'Use Redux',
                    completed: false,
                    id: 0
                }
            ], toggleTodo(1))
        ).toEqual([
            {
                title: 'Run the tests',
                completed: true,
                id: 1
            }, {
                title: 'Use Redux',
                completed: false,
                id: 0
            }
        ]);
    });

    it('should handle DELETE_TODO by id', () => {
        expect(
            reducer([
                {
                    title: 'Use Redux',
                    completed: false,
                    id: 0
                },
                {
                    title: 'Run the tests',
                    completed: false,
                    id: 1
                }
            ], deleteTodo(1))
        ).toEqual([
            {
                title: 'Use Redux',
                completed: false,
                id: 0
            }
        ]);
    });

    it('should handle EDIT_TODO', () => {
        expect(
            reducer([
                {
                    title: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    title: 'Use Redux',
                    completed: false,
                    id: 0
                }
            ], editTodo(1, 'Fix the tests'))
        ).toEqual([
            {
                title: 'Fix the tests',
                completed: false,
                id: 1
            }, {
                title: 'Use Redux',
                completed: false,
                id: 0
            }
        ]);
    });
});