import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

    const category = 'One Punch';

    test('Debe mostrar el loading inicialmente ', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
             isLoading: true
        });


        render( <GifGrid category= { category } /> );

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
    })

    test('Debe mostrar items cuando se cargan las imágenes ', () => {
        
        const gifs = [
            {
                id:'ABC',
                title:'Pocahontas',
                url:'https://holaMundo.com'
            },
            {
                id:'123',
                title:'Pepa pig',
                url:'https://holaMundo.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
             isLoading: true
        });

         render( <GifGrid category= { category } /> );
         expect( screen.getAllByRole('img').length ).toBe(2);

    })
    
    
})
