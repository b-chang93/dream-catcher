import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    shallow(<App/>);
});
