import Card from './Card.js';
import React from 'react';
//robots file usesw export instead of export default so it can export many things so we use brackets to call


const CardList = ({robots}) => {
    //first parameter of map is the element of the array itself and second arguement is index
    //map is used for looping  robots is an array of objects
    //remember to use key prop whenever looping so react could manage easily if some components deleted
 
   
    //we are using curly braces to provide id and name ,etc. as js syntax
    // these are being sent to the card function /object that we had created in other file

    
    return (
    <div>
        {
        robots.map((user, i) => {
        return (<Card key = {i} id = {robots[i].id} name = {robots[i].name } email = {robots[i].email} />
        ); 
    })

        }
    </div>
    );

}

export default CardList;
