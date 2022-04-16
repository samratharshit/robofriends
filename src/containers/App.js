import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';

//state of the app simply means description of the app. it is an object that describes our app.
// child recieves state from parents and cant change it}

//App is a smart component as it has state

class App extends Component{
    constructor(){
        super(); //calls the constructor of component
        this.state = { //the state lives in the parent component that is App and it(App) can pass the state to different child components
            robots: [],
            searchfield: ''
        } // now this state can be used by any child composnent like cardlist - cardlist componnet recieves it as props although it is a state
      console.log('constructor');
    }

    componentDidMount(){
        //this tells whether the component has been rendered or not?
        //it is called after render..(
            //fetch is a fxn. of the window object
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{ //here .then catches the response and converts to json
            return response.json();
        })
        .then(users=>{
            this.setState({robots: users});
        })
        ;
    
        console.log('componentDidMount');
        //here, we are changing the state and everytime the state changes, render runs again.
    }


    onSearchChange = (event) => { //using arrow fxns. avoids one error here. that is here this will now refer to App rather than referring to SearchBox(bcoz this fxn is called from there)
       
        //event.target.value remeber this. issey pta chalega kya type kia hai event ke target object ke value key me
        this.setState({searchfield: event.target.value}); //we  are using set state rather direct assignment
        
    
    
    }
    //we call it using this as it is an object

    render(){
        console.log('render')
        const filteredRobots = this.state.robots.filter(robot =>{
            //here we need to give a condition to filter
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return(
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange= {this.onSearchChange}/>
                <Scroll>
                  <ErrorBoundary>
                    <CardList robots = {filteredRobots}/>
                  </ErrorBoundary>
                </Scroll>
                
            </div>
            //in classlist, we are using state given by App() component
        );
    }
}


export default App;