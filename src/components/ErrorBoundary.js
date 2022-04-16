import React,{Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError : false
        }
    }
    
    componentDidCatch(error,info){ //this is a lifecycle hook 
        // it is just like try catch in js.
        this.setState({hasError: true});
    }

    render(){
        if(this.state.hasError){
        return (
            <h1>Oops... That is not good.</h1>
        )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;