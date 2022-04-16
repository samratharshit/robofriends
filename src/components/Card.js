import React from "react";  //we need to import react even if we dont use react components hat is only js is written bcoz its not js , its JSX provided by React


const Card = ({name, email, id}) => {
    // we can also use props in place of {name,email,id} and then do props.name etc.
  
    return(
        //in return, we just need to return one thing

        <div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt = "robot" src ={`https://robohash.org/${id}?200*200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>

            </div>
            
        </div>
    );

}

export default Card;