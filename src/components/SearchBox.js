import React from 'react';

const SearchBox = ({searchChange})=>{
    
    return(
        <div className='pa2 '>
        <input 
        className = 'pa3 ba b--green bg-lightest-blue'
        type = 'search' 
        placeholder='Search Robots' 
        onChange = {searchChange}
        />
        </div>
        //yahan par jab searchbox me hum kuch likhenge to vo sab parent component me app ko bheja jayega onChange bolega ki parent ke 
        //searchCHange fxn ko call rko
    )
}

export default SearchBox;
