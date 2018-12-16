import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../../store';
import DreamForm from './DreamForm';

describe('<DreamForm />', () => {
    it('Renders without crashing', () => {
        shallow(
          <Provider store={store}>
            <DreamForm />
          </Provider>);
    });
});
