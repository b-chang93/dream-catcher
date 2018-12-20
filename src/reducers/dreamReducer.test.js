import dreamReducer from './dreamReducer';
import {addDream, updateDream, deleteDream, removeDream, fetchDreamSuccess} from '../actions/dream';

describe('trelloReducer', () => {
    // Set up some dummy data
    const dream = {
      id: 123456789,
      title: 'Test Dream',
      content: 'Test Dream Content',
      creator: 'Test User',
      comments: [],
      private: false,
      created: '2018-12-16T06:47:56.007Z'
    }

    const dreamTwo = {
      id: 3456789010,
      title: 'Test Dream',
      content: 'Test Dream Content',
      creator: 'Test User',
      comments: [],
      private: false,
      created: '2018-12-16T06:47:56.007Z'
    }

    const updatedDream = {
      id: 123456789,
      title: 'Updated Dream',
      content: 'Test Updated Dream Content',
      creator: 'Test User',
      comments: [],
      private: false,
      created: '2018-12-16T06:47:56.007Z'
    }


    it('Should set the initial state when nothing is passed in', () => {
        const state = dreamReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual([]);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = [];
        const state = dreamReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('addDream', () => {
        it('Should add dream', () => {
            let state;
            state = dreamReducer(state, addDream(dream));
            expect(state).toEqual([dream]);
        });
    });

    describe('updateDream', () => {
        it('Should update dream', () => {
            let state;
            state = dreamReducer(state=[dream, dreamTwo], updateDream(updatedDream));
            expect(state[0]).toEqual(updatedDream);
        });
    });

    describe('deleteDream', () => {
        it('Should delete dream', () => {
            let state;
            state = dreamReducer(state=[dream, dreamTwo], removeDream(dream.id));
        });
    });

    describe('fetchDreamSuccess', () => {
        it('Should replace the entire state', () => {
            const dreams = [dream, dreamTwo];
            const state = dreamReducer(undefined, fetchDreamSuccess(dreams));
            expect(state).toEqual(dreams);
        });
    });
});
