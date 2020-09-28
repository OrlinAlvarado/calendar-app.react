const { types } = require("../../types/types")

describe('Pruebas en Types', () => {
    test('Los Types deben ser iguales ', () => {
        
        expect( types ).toEqual( {
    
            uiOpenModal: '[ui] Open Modal',
            uiCloseModal: '[ui] Close Modal',
            
            
            eventSetActive: '[event] Set Active',
            eventLogout: '[event] Logout',
            
            eventStartAddNew: '[event] Start Add new',
            eventAddNew: '[event] Add new',
            eventClearActiveEvent: '[event] Clear Active Event',
            eventUpdated: '[event] Event updated',
            eventDeleted: '[event] Event deleted',
            eventLoaded: '[event] Events loaded',
            
            authCheckingFinish: '[auth] Finish checking login state',
            authStartLogin: '[auth] Start login',
            authLogin: '[auth] Login',
            authStartRegister: '[auth] Start register',
            authStartTokenRenew: '[auth] Start token renew',
            authLogout: '[auth] Logout',
            
        })
    })
    
})
