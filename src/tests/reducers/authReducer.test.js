const { authReducer } = require("../../reducers/authReducer");
const { types } = require("../../types/types");





describe('Pruebas en el authReducer', () => {
    
    test('Debe de retornar el estado por defecto', () => {
        const initialState = {
            checking: true
        }
        
        const state = authReducer( initialState, {});
        
        expect( state ).toEqual( initialState );
        
    })
    
    test('Debe hacer el login correctamente', () => {
        const initialState = {
            checking: false
        }
        
        const loginAction = {
            type: types.authLogin,
            payload: {
               uid: '123456',
               name: 'orlin' 
            }
        }
        
        const state = authReducer( initialState, loginAction);
        
        expect( state ).toEqual( {
            ...initialState,
            ...loginAction.payload
        } );
        
    })
    
    test('Ejecutar funcion authCheckingFinish', () => {
        const initialState = {
            checking: true,
            uid: '123456',
            name: 'orlin' 
        }
        
        const action = {
            type: types.authCheckingFinish
        }
        
        const state = authReducer( initialState, action);
        
        expect( state ).toEqual( {
            ...initialState,
            checking: false
        } );
        
    })
    
    test('pruebas de logout', () => {
        const initialState = {
            checking: true,
            uid: '123456',
            name: 'orlin' 
        }
        
        const action = {
            type: types.authLogout
        }
        
        const state = authReducer( initialState, action);
        
        expect( state ).toEqual( {
            checking: false
        } );
        
    })
    
    
    
})
