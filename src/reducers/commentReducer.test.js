import commentReducer from './commentReducer';
import {addComment, deleteComment, removeComment, fetchCommentSuccess} from '../actions/comment';

describe('trelloReducer', () => {
    // Set up some dummy data
    const comment = {
      id: 123456789,
      text: 'Comment Test',
      creator: 'Test User',
      created: '2018-12-16T06:47:56.007Z',
      dream: {_id:'567890123'}
    }

    const commentTwo = {
      id: 345678901,
      text: 'Comment Test',
      creator: 'Test User',
      created: '2018-12-16T06:47:56.007Z',
      dream: {_id:'567890123'}
    }

    it('Should set the initial state when nothing is passed in', () => {
        const state = commentReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual([]);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = [];
        const state = commentReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('addComment', () => {
        it('Should add comment', () => {
            const testComment = {
              id: 123456789,
              text: 'Comment Test',
              creator: 'Test User',
              created: '2018-12-16T06:47:56.007Z',
              dream: '567890123'
            }
            let state;
            state = commentReducer(state, addComment(comment));
            expect(state).toEqual([testComment]);
        });
    });

    describe('deleteComment', () => {
        it('Should delete comment', () => {
            let state;
            state = commentReducer(state=[comment, commentTwo], removeComment(comment));
        });
    });

    describe('fetchCommentSuccess', () => {
        it('Should replace the entire state', () => {
            const comments = [comment, commentTwo];
            const state = commentReducer(undefined, fetchCommentSuccess(comments));
            expect(state).toEqual(comments);
        });
    });
});
