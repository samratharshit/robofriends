import React from 'react';


//scroll is not a self closing component as we have to return whatever is between the 2 scroll tags.
// state , props we have discussed now one more thing is there called children
//scroll can use children to render ch ildren --- every props object has children
//even if we dont pass props to scroll tag from app.js but still we will get props object having a children property by default
//as every component in react has this property


const Scroll =(props)=>{
        return (
            //here we are doing jsx similar to css way but little bit difference - , in place of ; and camelcase
            //overflow-y is used in css for scrolling 
            <div style = {{ overflowY: 'scroll', border: '5px solid black', height: '800px' }}> 
                {props.children}
            </div>
        
            )
        
}

export default Scroll;