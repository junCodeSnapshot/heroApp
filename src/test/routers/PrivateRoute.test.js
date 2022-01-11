import React from 'react'
import { mount } from "enzyme"
import { PrivateRoute } from '../../routers/PrivateRoute'
import { MemoryRouter } from 'react-router-dom'


describe('Pruebas en <PrivateRoute />', () => {
    const props = {
        location: {
            pathname: '/marvel'
        }
    }
    
    Storage.prototype.setItem = jest.fn();
    

    
    test('debe de mostrar el componente si esta autenticado y guardar en localStorage', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute isAutenticated={true} component={() => <span>Listo!</span>} {...props} />
            </MemoryRouter>
        );
        
        expect(wrapper.find('span').exists()).toBe(true);

        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });

    test('debe de blockear el componente si no esta autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute isAutenticated={false} component={() => <span>Listo!</span>} {...props} />
            </MemoryRouter>
        );
        expect(wrapper.find("span").exists()).toBe(false);
    })
    
})
