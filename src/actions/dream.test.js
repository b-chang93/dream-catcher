import {
    ADD_DREAM,
    addDream,
    UPDATE_DREAM,
    updateDream,
    DELETE_DREAM,
    deleteDream,
    FETCH_DREAM_SUCCESS,
    fetchDreamSuccess,
    fetchDream,
    privateDream
} from './dream';

describe('addDream', () => {
    it('Should return the action', () => {
        const dream = 'Example Dream';
        const action = addDream(dream);
        expect(action.type).toEqual(ADD_DREAM);
        expect(action.dream).toEqual(dream);
    });
});

describe('deleteDream', () => {
    it('Should return the action', () => {
        const action = deleteDream();
        expect(action.type).toEqual(DELETE_DREAM);
    });
});

describe('updateDream', () => {
    it('Should return the action', () => {
        const dream = 'Original Dream';
        const updatedDream = 'Updated Dream'
        const action = updateDream(updatedDream);
        expect(action.type).toEqual(UPDATE_DREAM);
        expect(action.dream).toEqual(updatedDream);
    });
});
