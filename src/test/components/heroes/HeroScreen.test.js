import { mount } from 'enzyme'
import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';



describe('Pruebas en <HeroScreen />', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    };

    test('debe de de mostrar el componente de redirect si no hay argumentos en el URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={history} />
            </MemoryRouter>

        );
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('debe de mostrar un hero si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-cyclops']}>
                <Route path="/hero/:heroeId" component={HeroScreen} />
            </MemoryRouter>
        );
        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('debe de regresar a la pantalla de /', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-cyclops']}>
                <Route path="/hero/:heroeId">
                    <HeroScreen history={history}/>
                </Route>
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    });

    test('debe de regresar a la pantalla anterior con goBack', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-cyclops']}>
                <Route path="/hero/:heroeId" component={ ()=> <HeroScreen history={history}/>}/>
            </MemoryRouter>
        );
        wrapper.find('button').prop('onClick')();

        expect(history.goBack).toHaveBeenCalled();
        expect(history.push).not.toHaveBeenCalled();
    });

    test('debe de llamar el redirect', () => {
            const wrapper = mount(
                <MemoryRouter initialEntries={['/hero/marvel-cyclops213131323123123']}>
                    <Route path="/hero/:heroeId" component={ ()=> <HeroScreen history={history}/>}/>
                </MemoryRouter>
            );
    
         expect(wrapper.text()).toBe('');
    })
    
    





})