import { authReducer } from "../../auth/authReducer";
import { types } from "../fixtures/types";

describe('Pruebas en authReducer', () => {
    
    test('debe retornar el estado por defecto', () => {
        const state = authReducer({logged: false},{});
        expect(state).toEqual({logged: false});
    });

    test('debe de autenticar y colocar el name del usuario', () => {

        const action = {
            type: types.login,
            payload: {name:'Pedro'},
        };

        const state = authReducer({logged: false},action);
        expect(state).toEqual({name:'Pedro',logged: true});
    });

    test('debe de borrar el name del usuario y el logged en false', () => {
        const initialState = {
            type: types.login,
            payload: {name:'Pedro'},
        };

        const action = {
            type: types.logout,
        };

        const state = authReducer(initialState ,action);

        expect(state).toEqual({logged: false});
    });
    
    
    
})
