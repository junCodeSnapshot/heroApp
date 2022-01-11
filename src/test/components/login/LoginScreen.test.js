import React from 'react'
import { LoginScreen } from '../../../components/Login/LoginScreen';
import { contextValueFalse } from '../../fixtures/contextValue';
import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../fixtures/types';

describe('Pruebas en <LoginScreen />', () => {
    
    const history = {
        replace: jest.fn(),
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValueFalse}>
            <LoginScreen history={history}/>
        </AuthContext.Provider>
    );

    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de realizar el dispatch y la navegacion', () => {

        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();

        expect(contextValueFalse.dispatch).toHaveBeenCalledWith({
            payload:{
                name:'Pedro'
            },
            type: types.login,
        });
        expect(history.replace).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath','/dc');
        handleClick();
        expect(history.replace).toHaveBeenCalledWith('/dc');

    });
    
    
})