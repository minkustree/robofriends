import React from 'react';

const SearchBox = ({ onsearchchange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search robots'
                onChange={onsearchchange}
            />
        </div>
    );
}

export default SearchBox;