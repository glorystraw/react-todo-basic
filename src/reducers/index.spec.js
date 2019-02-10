import reducer from './index';

describe('todos reducer', () => {
    it('should handle ADD_TODO', () => {
        expect(
            reducer([], {
                type: 'ADD_TODO',
                title: 'Run the tests',
                id: 0
            })
        ).toEqual([
            {
                title: 'Run the tests',
                completed: false,
                id: 0
            }
        ])
    })

    it('should handle TOGGLE_TODO', () => {
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
            ], {
                    type: 'TOGGLE_TODO',
                    id: 1
                })
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
        ])
    })

    it('should handle DELETE_TODO', () => {
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
            ], {
                    type: 'DELETE_TODO',
                    id: 1
                })
        ).toEqual([
            {
                title: 'Use Redux',
                completed: false,
                id: 0
            }
        ])
    })

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
            ], {
                    type: 'EDIT_TODO',
                    title: 'Fix the tests',
                    id: 1
                })
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
        ])
    })
})





