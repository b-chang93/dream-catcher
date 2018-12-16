import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../../store';
import Dream from './Dream';

describe('<Dream />', () => {
    it('Renders without cras hing', () => {
        shallow(
          <Provider store={store}>
            <Dream />
          </Provider>);
    });
});
