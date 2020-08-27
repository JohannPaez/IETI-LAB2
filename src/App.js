import React, {Component} from 'react';
import logo from './logo.svg';
import './components/App.css';
import 'react-datepicker/dist/react-datepicker.css';
import Login from "./components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import TodoApp from './components/TodoApp';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};    
        this.changeState = this.changeState.bind(this); 
        this.changePath = this.changePath.bind(this); 
        
    }

    changeState() {
        this.state.isLoggedIn = !this.state.isLoggedIn;         
        this.setState(this.state);
    }

    changePath() {    
        return localStorage.getItem('isLoggedIn') ? "/todo" : "/";
    }

    render() {
        const LoginView = () => (
            <Login isLoggedIn = {this.changeState} />
        );
      
        const TodoAppView = () => (
            <TodoApp/>
        );

        return (
            
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>
                        <Link to={this.changePath()}>Login</Link> <br/>
                        <Link to={this.changePath()}>Todo</Link>

                    <div>
                        <Route exact path="/" component={localStorage.getItem('isLoggedIn') ? TodoAppView: LoginView}/>
                        <Route exact path="/todo" component={localStorage.getItem('isLoggedIn') ? TodoAppView : LoginView}/>
                    </div>
                </div>
            </Router>
        );
    } 
}

export default App;
