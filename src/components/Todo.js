import React from 'react';
import DatePicker from "react-datepicker";

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.text}</td>
                <td>{this.props.priority}</td>
                {console.log("duedate---------------------------------------------")}
                {console.log(this.props.dueDate)}
                <td>{this.props.dueDate.toString()}</td>
            </tr>
        );
    }

}