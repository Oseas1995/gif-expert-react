import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim() <= 1 ) return;

        // setCategories([ inputValue, ...categories ]); // enviando las categories como props
        // setCategories( ( categories ) => [ inputValue, ...categories ]); // sin enviar las categories como props
        onNewCategory( inputValue.trim() );
        setInputValue('');

    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
