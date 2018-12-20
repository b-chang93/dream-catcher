import {
    ADD_COMMENT,
    addComment,
    UPDATE_COMMENT,
    updateComment,
    DELETE_COMMENT,
    deleteComment,
    FETCH_COMMENT_SUCCESS,
    fetchCommentSuccess,
    createComment,
    fetchComment,
    removeComment
} from './comment';

describe('addComment', () => {
    it('Should return the action', () => {
        const comment = 'Leave a comment';
        const action = addComment(comment);
        expect(action.type).toEqual(ADD_COMMENT);
        expect(action.comment).toEqual(comment);
    });
});

describe('deleteComment', () => {
    it('Should return the action', () => {
        const action = deleteComment();
        expect(action.type).toEqual(DELETE_COMMENT);
    });
});
