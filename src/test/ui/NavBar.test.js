import React from 'react'
import { mount } from 'enzyme'
import '@testing-library/jest-dom'
import { MemoryRouter, Router } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { Navbar } from '../../components/ui/Navbar'
import { types } from '../../types/types'
import { contextValueTrue } from '../fixtures/contextValue'

describe('Pruebas en <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {}, 
        listen: jest.fn(),
        createHref: jest.fn(),
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValueTrue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrarse correctamente ', () => {
      expect(wrapper).toMatchSnapshot();  
    });

    test('debe de llamar el logout y el usar history', () => {
        wrapper.find("button").prop('onClick')();

        expect(contextValueTrue.dispatch).toHaveBeenLastCalledWith({
            type: types.logout,
        });
        expect(historyMock.replace).toHaveBeenCalledWith('/login')
    })
    
        
})