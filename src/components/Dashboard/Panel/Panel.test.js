import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../../store';
import Panel from './Panel';

describe('<Panel />', () => {
    it('Renders without crashing', () => {
        shallow(
          <Provider store={store}>
            <Panel />
          </Provider>);
    });
});
