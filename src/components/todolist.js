import React, { Component } from 'react'
import TodoItems from './todoitems'

export default class TodoList extends Component {
    render() {
        const {items, clearList, delItem, edtItem} = this.props
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todo list</h3>

   { 
    items.map(item => {
        return(
            <TodoItems 
            key={item.id} 
            title={item.title}
            delItem={()=>delItem(item.id)}
            edtItem={()=>edtItem(item.id)}/>
        )
    })
    }
                <button 
                type="button" 
                onClick={clearList}
                className="btn btn-danger btn-block text-capitalize">Clear All List</button>
            </ul>
        )
    }
}
