import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {

    const category = 'Pocahontas';

    test('Debe mostrar la catogoría inicial ', () => {
        
        render( <GifExpertApp /> );
        expect( screen.getByText('One Punch') );
    })

    // test('Debe agregar una nueva categoría onAddCategory', () => {
        
    //     onAddCategory(category);

    //     render( <GifExpertApp /> );
    //     screen.debug();
    //     //expect( screen.getAllByRole('heading'). ).toEqual('h1');
    //     expect( screen.getAllByRole('heading', { level:1 }).length).toBe(1);
    // })
    
    
})
