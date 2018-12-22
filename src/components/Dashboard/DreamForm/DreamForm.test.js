import React from 'react';
import {shallow, mount} from 'enzyme';
import {DreamForm} from './DreamForm';

describe('<DreamForm />', () => {
    it('Renders without crashing', () => {
      shallow(<DreamForm/>);
    });

    it('Should render the create dream form when create dream is enabled', () => {
        const wrapper = shallow(<DreamForm/>);
        wrapper.instance().setCreateDream(true);
        expect(wrapper.state('createDream')).toEqual(true);
    });

    it('Should switch to editing when the add button is clicked', () => {
        const wrapper = shallow(<DreamForm />);
        wrapper.find('button').simulate('click');
        expect(wrapper.state('createDream')).toEqual(true);
    });
});
