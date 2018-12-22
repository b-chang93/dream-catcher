import React from 'react';
import {shallow, mount} from 'enzyme';
import {Dream} from './Dream';

let dream = {
    "_id" : "5c19f90f0a9169ba09c9beb4",
    "comments" : [],
    "private" : false,
    "creator": {
        "firstName": "Brandon",
        "lastName": "Chang",
        "_id": "5c14ace9458b866b16c5653d",
        "username": "bchang",
        "avatar": "http://api.adorable.io/avatars/285/j1qdym8xzxn"
    },
    "title" : "test",
    "content" : "test",
    "createdAt" : "2018-12-19T07:53:51.587Z",
    "updatedAt" : "2018-12-19T07:53:51.587Z"
}

describe('<Dream />', () => {
    it('Renders without crashing', () => {
      const dispatch = jest.fn();
      shallow(<Dream dream={dream}/>);
    });
});
