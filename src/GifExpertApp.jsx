import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  

   const [ categories, setCategories ] = useState( ['One Punch'] );

   const onAddCategory = ( newCategory ) => {
      //Validar si ya contiene un elemento con el mismo nombre
      if(categories.includes(newCategory) )  return;

      //Una forma
        setCategories([ newCategory, ...categories ]);
        //Segunda forma
        //setCategories(cat => [...cat, 'Valorant' ]);

   }

   const onDeleteCategory = ( { target } ) => {
      setCategories(categories.filter(cat => target.value !== cat))
   }

  return (  
    <>
    {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
          //setCategories={ setCategories }
          onNewCategory={ onAddCategory }
      />
  
        { 
          categories.map( ( category ) => ( 
              
              <GifGrid 
                    key={ category }
                    category={ category } 
                    deleteCategory={ onDeleteCategory }
              />
             
          ))
          
        }
    </>
  );
}
