import { mount } from 'enzyme'
import React from 'react'
import { contextValueFalse, contextValueTrue } from '../fixtures/contextValue'
import { AuthContext } from '../../auth/AuthContext'
import { AppRouter } from '../../routers/AppRouter'
describe('Pruebas en <AppRouter />', () => {

    test('debe de mostrar login si no estas autentificado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValueFalse}>

                <AppRouter />

            </AuthContext.Provider>
        
        );
            
        expect(wrapper.find('button').exists()).toBe(true); //o hacerle match con el snapshot
    });

    test('debe de mostrar el componente de marvel si esta autentificado', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValueTrue}>

                <AppRouter />

            </AuthContext.Provider>
        
        );
            
        expect(wrapper.find('.nav-item').exists()).toBe(true); //o hacerle match con el snapshot
    })
    
})
