import { GiftItem } from './GiftItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';


export const GifGrid = ( { category, deleteCategory } ) => {

    const {images, isLoading} = useFetchGifs( category );
  
    return (
        <>  
            <h1>{ category }</h1>
            <button onClick={ ( event ) => deleteCategory( event ) } value={ category }>Eliminar</button>
            
            {
                isLoading && ( <h2 >Cargando...</h2>)
            }
           
            <div className='card-grid'>
                {
                     images.map( ( image )  => (
                        <GiftItem 
                            key={ image.id }
                            { ...image }
                        />
                     ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

