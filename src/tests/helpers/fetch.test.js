const { fetchSinToken, fetchConToken } = require("../../helpers/fetch")


describe('Pruebas en el helper Fetch', () => {
    let token = '';
    test('fetchSinToken debe de funcionar', async() => {
        
        const resp = await fetchSinToken('auth', { email: 'orlin1@gmail.com', password: '123456' }, 'POST');
        
        expect( resp instanceof Response).toBe( true );
        
        const body = await resp.json();
        
        expect( body.ok ).toBe( true );
        
        token = body.token;
    })
    
    test('fetchSinToken debe de funcionar', async() => {
        
        localStorage.setItem('token', token);
        
        const resp = await fetchConToken('events/5f6963e8ce40a208ec40b93a', {}, 'DELETE');
        
        const body = await resp.json();
        
        expect( body.msg ).toBe('Evento no existe');
        
        
        
    })
    
    
    
})
