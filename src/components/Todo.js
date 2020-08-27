import React from 'react';
import CardLab from './CardLab'

export class Todo extends React.Component {

    render() {
        return (       
            <div>
                <CardLab 
                    text = {this.props.text}
                    priority = {this.props.priority}
                    dueDate = {this.props.dueDate.toString()}
                >
                </CardLab>
                <br />
            </div>
        );
    }
    
}
