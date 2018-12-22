import React from 'react';
import {shallow, mount} from 'enzyme';
import {Dashboard} from './Dashboard';
import {fetchDream} from '../../actions/dream';
import {fetchComment} from '../../actions/comment';
import {fetchUser} from '../../actions/users';
import {fetchProtectedData} from '../../actions/protected-data';

const mockFetchDreamAction = {
    type: 'FETCH_DREAM_SUCCESS'
};
jest.mock('../../actions/dream', () => Object.assign({},
    require.requireActual('../../actions/dream'),
    {
        fetchDream: jest.fn().mockImplementation(() => {
            return mockFetchDreamAction;
        })
    }
));

fetchUser

const mockFetchCommentAction = {
    type: 'FETCH_COMMENT_SUCCESS'
};
jest.mock('../../actions/comment', () => Object.assign({},
    require.requireActual('../../actions/comment'),
    {
        fetchComment: jest.fn().mockImplementation(() => {
            return mockFetchCommentAction;
        })
    }
));

const mockFetchUserAction = {
    type: 'FETCH_USER_SUCCESS'
};
jest.mock('../../actions/protected-data', () => Object.assign({},
    require.requireActual('../../actions/protected-data'),
    {
        fetchUser: jest.fn().mockImplementation(() => {
            return mockFetchUserAction;
        })
    }
));

describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Dashboard title="Dream Catcher" dreams={[]} dispatch={dispatch} />);
    });

    it('Dispatches fetchDream on mount', () => {
      const dispatch = jest.fn();
      shallow(<Dashboard title="Dream Catcher" dreams={[]} dispatch={dispatch} />);
      expect(dispatch).toHaveBeenCalledWith(mockFetchDreamAction);
    });

    it('Dispatches fetchComment on mount', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<Dashboard title="Dream Catcher" dreams={[]} comments={[]} dispatch={dispatch} />);
      expect(dispatch).toHaveBeenCalledWith(mockFetchCommentAction);
    });

    it('Dispatches fetchUser on mount', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<Dashboard title="Dream Catcher" dreams={[]} comments={[]} dispatch={dispatch} />);
      expect(dispatch).toHaveBeenCalledWith(mockFetchUserAction);
    });
});
