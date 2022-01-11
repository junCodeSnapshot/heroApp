import { mount } from 'enzyme'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { contextValueTrue } from '../fixtures/contextValue'
import { AuthContext } from '../../auth/AuthContext'
import { DashboardRoutes } from '../../routers/DashboardRoutes'

describe('Pruebas en <DashboardRoutes />', () => {

    test('debe hacer match con el snapshot', () => {
        const wrapper = mount(

            <AuthContext.Provider value={contextValueTrue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el nombre del usuario \'Pedro\'', () => {
        const wrapper = mount(

            <AuthContext.Provider value={contextValueTrue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper.find('.text-info').text().trim()).toEqual('Pedro');
    })
    


})
