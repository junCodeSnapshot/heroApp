import { mount } from 'enzyme'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { PublicRoute } from '../../routers/PublicRoute'

describe('Pruebas en <PublicRoute />', () => {

    test('debe de mostrar el componente', () => {
        const wrapper = mount(
        <MemoryRouter>
            <PublicRoute 
                isAutenticated={false}
                component={() => <span>LoginScreen</span>}
            />
        </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBe(true)
    })    
    
    test('debe de blockear el componente', () => {
        const wrapper = mount(
        <MemoryRouter>
            <PublicRoute 
                isAutenticated={true}
                component={() => <span>LoginScreen</span>}
            />
        </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBe(false)
    })
    
})
