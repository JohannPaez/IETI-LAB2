import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import { Login } from "./Login";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Card from '@material-ui/core/Card';


class TodoApp extends Component {

    
    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>

                <br/>
                <br/>
                
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>New TODO</h3>
                    <Card style = {{ backgroundImage: "linear-gradient(to right, #1e1f22, white)" }}>
                    <label htmlFor="text" className="right-margin">
                        Text:
                    </label>
                    
                    <TextField
                        id="text"
                        onChange={this.handleTextChange}
                        value={this.state.text}>
                    </TextField>

                    <br/>
                    <br/>
                    <label htmlFor="priority" className="right-margin">
                        Priority:
                    </label>

                    <TextField
                        id="priority"
                        type="number"
                        onChange={this.handlePriorityChange}
                        value={this.state.priority}>
                    </TextField>
                    <br/>
                    <br/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                            margin="normal"
                            id="due-date"
                            label="Due Date"
                            format="dd-MM-yyyy"
                            value = {this.state.dueDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>                    
                    <Button
                        type="submit">
                        Add #{this.state.items.length + 1}
                    </Button>
                    </Card>
                </form>
                <br/>
                <br/>
                
                    <TodoList todoList={this.state.items}/>
                             

                <Login></Login>
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };


        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: null
        }));
    }

}

export default TodoApp;
