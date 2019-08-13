import React, { Component } from 'react'

export default class TodoItems extends Component {
    render() {
        const {title, delItem, edtItem} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                   <span className="mx-2 text-success" onClick={edtItem}>
                       <i className="fas fa-edit"></i>
                   </span>
                   <span className="mx-2 text-danger" onClick={delItem}>
                       <i className="fas fa-trash-alt"></i>
                   </span>
                </div>
            </li>
        )
    }
}
