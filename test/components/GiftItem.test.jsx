import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/components";


describe('Pruebas en GifItem', () => {
    
    const title = 'One Punch';
    const url = 'https://media1.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=b8569c3658it1cpzvqsuts9i8xwt8es7bz34w814w084d9oo&ep=v1_gifs_search&rid=giphy.gif&ct=g';

    test('Debe hacer match con snapshot ', () => {
        const { container }  = render ( <GiftItem title= { title } url = {url}/> );
        expect(container).toMatchSnapshot();       
    })

    test('Debe de mostrar la imagen con el URL y ALT indicado ', () => {
        render ( <GiftItem title= { title } url = {url}/> );
        //screen.debug();

        //Primera Forma
        // expect( screen.getByRole('img').src ).toBe( url )
        // expect( screen.getByRole('img').alt ).toBe( title );
        
        //Segunda Forma
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( src );
        expect( alt ).toBe( alt );

    });

    test('Debe mostrar el título del componente ', () => {
        render ( <GiftItem title= { title } url = {url}/> );
        expect( screen.getByText( title ) ).toBeTruthy();
    })
    
    
        
})
