import React from 'react';
import {shallow, mount} from 'enzyme';
import {Panel} from './Panel';

describe('<Panel />', () => {
    it('Renders without crashing', () => {
      const dispatch = jest.fn();
      shallow(<Panel comments={[]}/>);
    });

    it('Should switch to editing when the edit button is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Panel comments={[]}/>);
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.state('editing')).toEqual(true);
    });

    it('Should switch to commenting when the comment button is clicked', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<Panel comments={[]}/>);
      wrapper.find('button').at(1).simulate('click');
      expect(wrapper.state('commenting')).toEqual(true);
    });
});
